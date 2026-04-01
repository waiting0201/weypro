import { Component, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';
import { ScrollService } from '../../../core/services/scroll.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <footer
      class="relative overflow-hidden"
      style="background: #0f172a; font-family: var(--font-family-body);"
      aria-label="頁腳"
    >
      <!-- Subtle dot-grid decorative pattern -->
      <div
        class="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style="background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
               background-size: 28px 28px;"
      ></div>

      <!-- Top accent line -->
      <div
        class="relative h-px w-full"
        style="background: linear-gradient(90deg, transparent 0%, #0284c7 30%, #06b6d4 70%, transparent 100%);"
        aria-hidden="true"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <!-- Top section -->
        <div class="flex flex-col items-center gap-6 mb-10">

          <!-- Logo image — brightness filter makes it white on dark bg -->
          <a
            href="#"
            (click)="scrollToTop($event)"
            aria-label="威庭科技 Weypro Technology - 回到頂部"
            class="focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                   focus:ring-offset-slate-900 rounded-sm"
          >
            <img
              src="assets/images/logo.png"
              alt="Weypro Technology 威庭科技"
              class="h-8 w-auto"
              style="opacity: 0.9;"
            />
          </a>

          <!-- Tagline -->
          <p class="text-sm text-center max-w-md" style="color: rgba(255,255,255,0.45);">
            {{ 'footer.tagline' | translate }}
          </p>

          <!-- Contact Links -->
          <div class="flex flex-wrap items-center justify-center gap-3">

            <!-- LINE -->
            <a
              href="https://line.me/ti/p/weypro"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                     transition-all duration-150
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                     focus:ring-offset-slate-900"
              style="color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.06);
                     border: 1px solid rgba(255,255,255,0.1);"
              onmouseenter="this.style.color='#4ade80'; this.style.borderColor='rgba(74,222,128,0.4)'; this.style.background='rgba(74,222,128,0.08)';"
              onmouseleave="this.style.color='rgba(255,255,255,0.6)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.06)';"
              aria-label="LINE 聯絡我們"
            >
              <!-- LINE Icon -->
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              LINE
            </a>

            <!-- Email -->
            <a
              href="mailto:info@weypro.com"
              class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                     transition-all duration-150
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                     focus:ring-offset-slate-900"
              style="color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.06);
                     border: 1px solid rgba(255,255,255,0.1);"
              onmouseenter="this.style.color='#38bdf8'; this.style.borderColor='rgba(56,189,248,0.4)'; this.style.background='rgba(56,189,248,0.08)';"
              onmouseleave="this.style.color='rgba(255,255,255,0.6)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.06)';"
              aria-label="Email 聯絡我們"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info&#64;weypro.com
            </a>

            <!-- Phone -->
            <a
              href="tel:+886424366659"
              class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                     transition-all duration-150
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                     focus:ring-offset-slate-900"
              style="color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.06);
                     border: 1px solid rgba(255,255,255,0.1);"
              onmouseenter="this.style.color='#22d3ee'; this.style.borderColor='rgba(34,211,238,0.4)'; this.style.background='rgba(34,211,238,0.08)';"
              onmouseleave="this.style.color='rgba(255,255,255,0.6)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.06)';"
              aria-label="電話聯絡我們"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {{ 'footer.phone' | translate }}
            </a>

          </div>
        </div>

        <!-- Divider -->
        <div
          class="border-t pt-6"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <p class="text-center text-xs" style="color: rgba(255,255,255,0.28);">
            {{ 'footer.copyright' | translate }}
          </p>
        </div>

      </div>
    </footer>
  `,
})
export class FooterComponent {
  private i18n = inject(I18nService);
  private scrollService = inject(ScrollService);

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToTop();
  }
}
