import { Component, inject, signal, PLATFORM_ID, afterNextRender, ElementRef, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';
import { ContactService } from '../../../../core/services/contact.service';
import { ToastService } from '../../../../core/services/toast.service';
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="contact" class="bg-white section-padding">
      <div class="max-w-6xl mx-auto">

        <!-- Section header -->
        <div class="text-center mb-16">
          <div
            appAnimateOnScroll
            [delay]="0"
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full
                   bg-sky-50 text-sky-600 text-sm font-medium mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
            {{ 'contact.badge' | translate }}
          </div>
          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-4"
            style="font-family: var(--font-family-heading);"
          >
            {{ 'contact.title' | translate }}
          </h2>
          <p
            appAnimateOnScroll
            [delay]="180"
            class="text-lg text-slate-500 max-w-xl mx-auto"
          >
            {{ 'contact.subtitle' | translate }}
          </p>
          <div
            appAnimateOnScroll
            [delay]="200"
            class="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto mt-6"
          ></div>
        </div>

        <!-- Two-column layout -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">

          <!-- Form column (left, wider) -->
          <div
            appAnimateOnScroll
            [delay]="200"
            class="lg:col-span-3"
          >
            @if (submitted()) {
              <!-- Success state -->
              <div
                class="flex flex-col items-center justify-center text-center
                       rounded-2xl border border-green-100 bg-green-50 p-12"
              >
                <div
                  class="w-16 h-16 rounded-full bg-green-100 flex items-center
                         justify-center mb-6"
                >
                  <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 mb-3">
                  {{ 'contact.form.successTitle' | translate }}
                </h3>
                <p class="text-slate-500 text-sm mb-6">
                  {{ 'contact.form.success' | translate }}
                </p>
                <button
                  (click)="resetForm()"
                  class="px-6 py-2.5 rounded-xl text-sm font-medium
                         bg-sky-600 hover:bg-sky-700 text-white
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  {{ 'contact.form.sendAgain' | translate }}
                </button>
              </div>
            } @else {
              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                class="space-y-5"
                novalidate
              >
                <!-- Row 1: company + name -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      for="company"
                      class="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {{ 'contact.form.company' | translate }}
                    </label>
                    <input
                      id="company"
                      type="text"
                      formControlName="company"
                      class="w-full rounded-xl border border-slate-200 px-4 py-2.5
                             text-sm text-slate-800 placeholder:text-slate-400
                             focus:outline-none focus:ring-2 focus:ring-sky-500/30
                             focus:border-sky-400 transition-colors duration-200
                             bg-slate-50 hover:bg-white"
                      [class.border-red-300]="isInvalid('company')"
                    />
                    @if (isInvalid('company')) {
                      <p class="mt-1 text-xs text-red-500">
                        {{ 'contact.form.required' | translate }}
                      </p>
                    }
                  </div>

                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {{ 'contact.form.name' | translate }}
                      <span class="text-red-400 ml-0.5">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      formControlName="name"
                      class="w-full rounded-xl border border-slate-200 px-4 py-2.5
                             text-sm text-slate-800 placeholder:text-slate-400
                             focus:outline-none focus:ring-2 focus:ring-sky-500/30
                             focus:border-sky-400 transition-colors duration-200
                             bg-slate-50 hover:bg-white"
                      [class.border-red-300]="isInvalid('name')"
                    />
                    @if (isInvalid('name')) {
                      <p class="mt-1 text-xs text-red-500">
                        {{ 'contact.form.required' | translate }}
                      </p>
                    }
                  </div>
                </div>

                <!-- Row 2: phone + email -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      for="phone"
                      class="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {{ 'contact.form.phone' | translate }}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      formControlName="phone"
                      class="w-full rounded-xl border border-slate-200 px-4 py-2.5
                             text-sm text-slate-800 placeholder:text-slate-400
                             focus:outline-none focus:ring-2 focus:ring-sky-500/30
                             focus:border-sky-400 transition-colors duration-200
                             bg-slate-50 hover:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {{ 'contact.form.email' | translate }}
                      <span class="text-red-400 ml-0.5">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      formControlName="email"
                      class="w-full rounded-xl border border-slate-200 px-4 py-2.5
                             text-sm text-slate-800 placeholder:text-slate-400
                             focus:outline-none focus:ring-2 focus:ring-sky-500/30
                             focus:border-sky-400 transition-colors duration-200
                             bg-slate-50 hover:bg-white"
                      [class.border-red-300]="isInvalid('email')"
                    />
                    @if (isInvalid('email')) {
                      <p class="mt-1 text-xs text-red-500">
                        @if (contactForm.get('email')?.errors?.['required']) {
                          {{ 'contact.form.required' | translate }}
                        } @else {
                          {{ 'contact.form.emailInvalid' | translate }}
                        }
                      </p>
                    }
                  </div>
                </div>

                <!-- Service type -->
                <div>
                  <label
                    for="type"
                    class="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    {{ 'contact.form.type' | translate }}
                  </label>
                  <div class="relative">
                    <select
                      id="type"
                      formControlName="type"
                      class="w-full rounded-xl border border-slate-200 px-4 py-2.5
                             text-sm text-slate-800 bg-slate-50 hover:bg-white
                             focus:outline-none focus:ring-2 focus:ring-sky-500/30
                             focus:border-sky-400 transition-colors duration-200
                             appearance-none cursor-pointer pr-10"
                    >
                      <option value="">{{ 'contact.form.typePlaceholder' | translate }}</option>
                      @for (option of serviceTypes; track option.value) {
                        <option [value]="option.value">{{ option.label | translate }}</option>
                      }
                    </select>
                    <!-- Custom chevron -->
                    <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    {{ 'contact.form.message' | translate }}
                    <span class="text-red-400 ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="5"
                    class="w-full rounded-xl border border-slate-200 px-4 py-2.5
                           text-sm text-slate-800 placeholder:text-slate-400
                           focus:outline-none focus:ring-2 focus:ring-sky-500/30
                           focus:border-sky-400 transition-colors duration-200
                           bg-slate-50 hover:bg-white resize-none"
                    [class.border-red-300]="isInvalid('message')"
                  ></textarea>
                  @if (isInvalid('message')) {
                    <p class="mt-1 text-xs text-red-500">
                      {{ 'contact.form.required' | translate }}
                    </p>
                  }
                </div>

                <!-- Turnstile -->
                <div id="cf-turnstile"></div>

                <!-- Submit button -->
                <button
                  type="submit"
                  [disabled]="submitting() || !turnstileToken()"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2
                         px-10 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700
                         text-white font-semibold text-sm shadow-lg shadow-sky-600/25
                         hover:shadow-xl hover:shadow-sky-600/30 hover:-translate-y-0.5
                         disabled:opacity-60 disabled:cursor-not-allowed
                         transition-all duration-200
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  @if (submitting()) {
                    <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    {{ 'contact.form.submitting' | translate }}
                  } @else {
                    {{ 'contact.form.submit' | translate }}
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  }
                </button>
              </form>
            }
          </div>

          <!-- Contact info column (right) -->
          <div
            appAnimateOnScroll
            [delay]="300"
            class="lg:col-span-2 flex flex-col gap-6"
          >
            <!-- Info card -->
            <div
              class="rounded-2xl text-white p-8 shadow-xl"
              style="background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%);
                     box-shadow: 0 20px 40px -10px rgba(2,132,199,0.35);"
            >
              <h3 class="font-semibold text-lg mb-6">
                {{ 'contact.info.title' | translate }}
              </h3>

              <div class="space-y-5">
                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-10 h-10 rounded-xl flex items-center
                           justify-center flex-shrink-0"
                    style="background: rgba(255,255,255,0.15);"
                  >
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.338c0-1.02.633-1.943 1.593-2.28A11.97 11.97 0 016.75 3.75a11.97 11.97 0 012.907.308c.96.337 1.593 1.26 1.593 2.28v1.5a1.5 1.5 0 01-1.5 1.5H8.25a1.5 1.5 0 00-1.5 1.5v.75a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 011.5 1.5v.75c0 1.02-.633 1.943-1.593 2.28A11.97 11.97 0 016.75 18a11.97 11.97 0 01-2.907-.308C2.883 17.355 2.25 16.432 2.25 15.412v-9.074z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs mb-1" style="color: rgba(255,255,255,0.6);">
                      {{ 'contact.info.phone' | translate }}
                    </p>
                    <a href="tel:+886424366659"
                       class="text-white font-medium hover:text-cyan-200
                              transition-colors duration-200">
                      +886-4-24366659
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div
                    class="w-10 h-10 rounded-xl flex items-center
                           justify-center flex-shrink-0"
                    style="background: rgba(255,255,255,0.15);"
                  >
                    <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs mb-1" style="color: rgba(255,255,255,0.6);">
                      {{ 'contact.info.email' | translate }}
                    </p>
                    <a href="mailto:tim@weypro.com"
                       class="text-white font-medium hover:text-cyan-200
                              transition-colors duration-200">
                      tim&#64;weypro.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <!-- Business hours card -->
            <div
              class="rounded-2xl border border-slate-100 bg-white shadow-sm p-7"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
                  <svg class="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 class="font-semibold text-slate-900 text-sm">
                  {{ 'contact.info.hours' | translate }}
                </h4>
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between text-slate-600">
                  <span>{{ 'contact.info.weekdays' | translate }}</span>
                  <span class="font-medium text-slate-800">09:00 – 18:00</span>
                </div>
                <div class="flex justify-between text-slate-400">
                  <span>{{ 'contact.info.saturday' | translate }}</span>
                  <span>{{ 'contact.info.closed' | translate }}</span>
                </div>
                <div class="flex justify-between text-slate-400">
                  <span>{{ 'contact.info.sunday' | translate }}</span>
                  <span>{{ 'contact.info.closed' | translate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private toastService = inject(ToastService);
  private i18n = inject(I18nService);
  private platformId = inject(PLATFORM_ID);

  submitted = signal(false);
  submitting = signal(false);
  turnstileToken = signal<string | null>(null);

  readonly serviceTypes = [
    { value: 'simplify', label: 'contact.form.type.simplify' },
    { value: 'understand', label: 'contact.form.type.understand' },
    { value: 'analytics', label: 'contact.form.type.analytics' },
    { value: 'other', label: 'contact.form.type.other' },
  ];

  contactForm: FormGroup = this.fb.group({
    company: [''],
    name: ['', Validators.required],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    type: [''],
    message: ['', Validators.required],
  });

  private turnstileWidgetId: string | null = null;

  constructor() {
    afterNextRender(() => this.loadTurnstile());
  }

  private loadTurnstile(): void {
    const siteKey = '0x4AAAAAACy6BLQLRO7GoTvt';

    (window as any).onTurnstileCallback = (token: string) => {
      this.turnstileToken.set(token);
    };

    if ((window as any).turnstile) {
      this.renderTurnstile(siteKey);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileReady';
    script.async = true;
    script.defer = true;
    (window as any).onTurnstileReady = () => this.renderTurnstile(siteKey);
    document.head.appendChild(script);
  }

  private renderTurnstile(siteKey: string): void {
    const container = document.getElementById('cf-turnstile');
    if (!container) return;
    this.turnstileWidgetId = (window as any).turnstile.render(container, {
      sitekey: siteKey,
      callback: (token: string) => this.turnstileToken.set(token),
      'expired-callback': () => this.turnstileToken.set(null),
    });
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid || !this.turnstileToken()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    try {
      await firstValueFrom(this.contactService.submit({
        ...this.contactForm.value,
        turnstileToken: this.turnstileToken(),
      }));
      this.submitted.set(true);
      this.toastService.show(
        this.i18n.isZh() ? '訊息已成功送出！' : 'Message sent successfully!',
        'success',
      );
    } catch {
      this.toastService.show(
        this.i18n.isZh() ? '送出失敗，請稍後再試。' : 'Failed to send. Please try again later.',
        'error',
      );
    } finally {
      this.submitting.set(false);
    }
  }

  resetForm(): void {
    this.contactForm.reset();
    this.submitted.set(false);
    this.turnstileToken.set(null);
    if (isPlatformBrowser(this.platformId) && this.turnstileWidgetId != null) {
      (window as any).turnstile.reset(this.turnstileWidgetId);
    }
  }
}
