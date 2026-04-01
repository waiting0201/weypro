import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { Resend } from 'resend';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// ---------------------------------------------------------------------------
// Contact Form API
// ---------------------------------------------------------------------------

let resendClient: Resend | null = null;
function getResend(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env['RESEND_API_KEY'] || '');
  }
  return resendClient;
}

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { company, name, phone, email, type, message, turnstileToken } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: 'name, email, and message are required' });
    return;
  }

  // Verify Turnstile token
  const turnstileSecret = process.env['TURNSTILE_SECRET_KEY'] || '';
  if (turnstileSecret && turnstileToken) {
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: turnstileSecret, response: turnstileToken }),
      });
      const result = await verifyRes.json() as { success: boolean };
      if (!result.success) {
        res.status(403).json({ error: 'Turnstile verification failed' });
        return;
      }
    } catch {
      res.status(500).json({ error: 'Turnstile verification error' });
      return;
    }
  }

  try {
    await getResend().emails.send({
      from: '威庭科技 <noreply@weypro.com>',
      to: 'tim@weypro.com',
      subject: `[網站聯絡] ${company || '未填公司'} - ${name}`,
      html: `
        <h2>網站聯絡表單</h2>
        <table style="border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 12px;font-weight:bold;">公司名稱</td><td style="padding:6px 12px;">${company || '-'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">聯絡人</td><td style="padding:6px 12px;">${name}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">電話</td><td style="padding:6px 12px;">${phone || '-'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">需求類型</td><td style="padding:6px 12px;">${type || '-'}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;">需求說明</td><td style="padding:6px 12px;">${message}</td></tr>
        </table>
      `,
      replyTo: email,
    });

    res.json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
