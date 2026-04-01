import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="about" class="bg-white section-padding">
      <div class="max-w-5xl mx-auto">

        <!-- Section label -->
        <div class="text-center mb-16">
          <div
            appAnimateOnScroll
            [delay]="0"
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                   bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-6"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
            {{ 'about.label' | translate }}
          </div>

          <!-- Title -->
          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-5"
            style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
          >
            {{ 'about.title' | translate }}
          </h2>

          <!-- Gradient divider -->
          <div
            appAnimateOnScroll
            [delay]="160"
            class="w-16 h-1 rounded-full mx-auto mb-8"
            style="background: linear-gradient(90deg, #0284c7, #06b6d4);"
          ></div>

          <!-- Description -->
          <p
            appAnimateOnScroll
            [delay]="220"
            class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
            style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
          >
            {{ 'about.description' | translate }}
          </p>
        </div>

        <!-- Mission statement card -->
        <div
          appAnimateOnScroll
          [delay]="320"
          class="relative rounded-2xl p-px mb-20 max-w-3xl mx-auto"
          style="background: linear-gradient(135deg, rgba(2,132,199,0.6), rgba(6,182,212,0.4));"
        >
          <div
            class="relative rounded-2xl px-10 py-10"
            style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                   box-shadow: 0 0 40px rgba(2,132,199,0.15);"
          >
            <!-- Subtle inner glow -->
            <div
              class="absolute inset-0 rounded-2xl pointer-events-none"
              style="background: radial-gradient(ellipse at top left, rgba(2,132,199,0.12) 0%, transparent 60%);"
              aria-hidden="true"
            ></div>

            <!-- Quote icon -->
            <svg
              class="w-9 h-9 mb-5 mx-auto"
              style="color: rgba(6,182,212,0.4);"
              fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>

            <p
              class="relative text-xl sm:text-2xl font-semibold leading-relaxed text-center"
              style="color: #e2e8f0; font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'about.mission' | translate }}
            </p>
          </div>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div
            appAnimateOnScroll
            [delay]="100"
            class="flex flex-col items-center gap-2 py-8 px-4 rounded-2xl
                   bg-slate-50 border border-slate-100"
          >
            <span
              class="text-3xl sm:text-4xl font-bold"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);
                     -webkit-background-clip: text;
                     -webkit-text-fill-color: transparent;
                     background-clip: text;
                     font-family: 'Plus Jakarta Sans', sans-serif;"
            >
              {{ 'about.stat1.value' | translate }}
            </span>
            <span
              class="text-sm text-slate-500 text-center leading-snug"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'about.stat1.label' | translate }}
            </span>
          </div>

          <div
            appAnimateOnScroll
            [delay]="200"
            class="flex flex-col items-center gap-2 py-8 px-4 rounded-2xl
                   bg-slate-50 border border-slate-100"
          >
            <span
              class="text-3xl sm:text-4xl font-bold"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);
                     -webkit-background-clip: text;
                     -webkit-text-fill-color: transparent;
                     background-clip: text;
                     font-family: 'Plus Jakarta Sans', sans-serif;"
            >
              {{ 'about.stat2.value' | translate }}
            </span>
            <span
              class="text-sm text-slate-500 text-center leading-snug"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'about.stat2.label' | translate }}
            </span>
          </div>

          <div
            appAnimateOnScroll
            [delay]="300"
            class="flex flex-col items-center gap-2 py-8 px-4 rounded-2xl
                   bg-slate-50 border border-slate-100"
          >
            <span
              class="text-3xl sm:text-4xl font-bold"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);
                     -webkit-background-clip: text;
                     -webkit-text-fill-color: transparent;
                     background-clip: text;
                     font-family: 'Plus Jakarta Sans', sans-serif;"
            >
              {{ 'about.stat3.value' | translate }}
            </span>
            <span
              class="text-sm text-slate-500 text-center leading-snug"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'about.stat3.label' | translate }}
            </span>
          </div>

          <div
            appAnimateOnScroll
            [delay]="400"
            class="flex flex-col items-center gap-2 py-8 px-4 rounded-2xl
                   bg-slate-50 border border-slate-100"
          >
            <span
              class="text-3xl sm:text-4xl font-bold"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);
                     -webkit-background-clip: text;
                     -webkit-text-fill-color: transparent;
                     background-clip: text;
                     font-family: 'Plus Jakarta Sans', sans-serif;"
            >
              {{ 'about.stat4.value' | translate }}
            </span>
            <span
              class="text-sm text-slate-500 text-center leading-snug"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'about.stat4.label' | translate }}
            </span>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
