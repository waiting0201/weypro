/**
 * Cloudflare Worker entry point.
 *
 * The Angular app is fully prerendered at build time (see app.routes.server.ts),
 * so static assets serve the site and this Worker only handles the contact API.
 * `src/server.ts` remains the Node/SSR entry used by `ng serve` during development.
 */

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
}

interface ContactPayload {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  type?: string;
  message?: string;
  turnstileToken?: string;
}

const MAIL_FROM = '威庭科技 <noreply@weypro.com>';
const MAIL_TO = 'tim@weypro.com';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return json({ error: 'Method not allowed' }, 405, { Allow: 'POST' });
      }
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const company = trim(body.company);
  const name = trim(body.name);
  const phone = trim(body.phone);
  const email = trim(body.email);
  const type = trim(body.type);
  const message = trim(body.message);

  if (!name || !email || !message) {
    return json({ error: 'name, email, and message are required' }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email address' }, 400);
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const verified = await verifyTurnstile(
      env.TURNSTILE_SECRET_KEY,
      trim(body.turnstileToken),
      request.headers.get('CF-Connecting-IP'),
    );
    if (verified === 'error') {
      return json({ error: 'Turnstile verification error' }, 500);
    }
    if (verified === 'failed') {
      return json({ error: 'Turnstile verification failed' }, 403);
    }
  }

  const html = `
    <h2>網站聯絡表單</h2>
    <table style="border-collapse:collapse;font-size:14px;">
      ${row('公司名稱', company)}
      ${row('聯絡人', name)}
      ${row('電話', phone)}
      ${row('Email', email)}
      ${row('需求類型', type)}
      ${row('需求說明', message)}
    </table>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: MAIL_FROM,
        to: MAIL_TO,
        subject: `[網站聯絡] ${company || '未填公司'} - ${name}`,
        html,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', res.status, await res.text());
      return json({ error: 'Failed to send email' }, 500);
    }
  } catch (error) {
    console.error('Resend request failed:', error);
    return json({ error: 'Failed to send email' }, 500);
  }

  return json({ ok: true });
}

/** Returns 'ok' when the token is valid, 'failed' when rejected, 'error' when unreachable. */
async function verifyTurnstile(
  secret: string,
  token: string,
  remoteip: string | null,
): Promise<'ok' | 'failed' | 'error'> {
  if (!token) return 'failed';

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret,
        response: token,
        ...(remoteip ? { remoteip } : {}),
      }),
    });
    const result = (await res.json()) as { success?: boolean };
    return result.success ? 'ok' : 'failed';
  } catch {
    return 'error';
  }
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:6px 12px;font-weight:bold;">${escapeHtml(label)}</td><td style="padding:6px 12px;">${escapeHtml(value) || '-'}</td></tr>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function trim(value: unknown): string {
  return typeof value === 'string' ? value.trim().slice(0, 5000) : '';
}

function json(data: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}
