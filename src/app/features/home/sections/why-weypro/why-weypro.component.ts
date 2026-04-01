import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-why-weypro',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="why" class="bg-slate-50 section-padding">
      <div class="max-w-5xl mx-auto">

        <!-- Section header -->
        <div class="text-center mb-16">
          <div
            appAnimateOnScroll
            [delay]="0"
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                   bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-6"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
            {{ 'why.label' | translate }}
          </div>

          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-5"
            style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
          >
            {{ 'why.title' | translate }}
          </h2>

          <div
            appAnimateOnScroll
            [delay]="160"
            class="w-16 h-1 rounded-full mx-auto"
            style="background: linear-gradient(90deg, #0284c7, #06b6d4);"
          ></div>
        </div>

        <!-- Cards 1x3 grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Card 1: Easier -->
          <div
            appAnimateOnScroll
            [delay]="100"
            class="group relative bg-white rounded-2xl border border-slate-200
                   p-8 overflow-hidden
                   transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1.5"
          >
            <div
              class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);"
              aria-hidden="true"
            ></div>

            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-6
                     bg-sky-50 group-hover:bg-sky-100 transition-colors duration-500 ease-out"
            >
              <svg
                class="w-6 h-6 text-sky-600"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"
                aria-hidden="true"
              >
                <!-- Face smile icon -->
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </div>

            <h3
              class="text-lg font-semibold text-slate-900 mb-3"
              style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'why.easier.title' | translate }}
            </h3>
            <p
              class="text-slate-500 text-sm leading-relaxed"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'why.easier.desc' | translate }}
            </p>
          </div>

          <!-- Card 2: Growth -->
          <div
            appAnimateOnScroll
            [delay]="200"
            class="group relative bg-white rounded-2xl border border-slate-200
                   p-8 overflow-hidden
                   transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1.5"
          >
            <div
              class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);"
              aria-hidden="true"
            ></div>

            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-6
                     bg-sky-50 group-hover:bg-sky-100 transition-colors duration-500 ease-out"
            >
              <svg
                class="w-6 h-6 text-sky-600"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"
                aria-hidden="true"
              >
                <!-- Arrow trending up icon -->
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>

            <h3
              class="text-lg font-semibold text-slate-900 mb-3"
              style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'why.growth.title' | translate }}
            </h3>
            <p
              class="text-slate-500 text-sm leading-relaxed"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'why.growth.desc' | translate }}
            </p>
          </div>

          <!-- Card 3: Intuitive -->
          <div
            appAnimateOnScroll
            [delay]="300"
            class="group relative bg-white rounded-2xl border border-slate-200
                   p-8 overflow-hidden
                   transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1.5"
          >
            <div
              class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style="background: linear-gradient(90deg, #0284c7, #06b6d4);"
              aria-hidden="true"
            ></div>

            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-6
                     bg-sky-50 group-hover:bg-sky-100 transition-colors duration-500 ease-out"
            >
              <svg
                class="w-6 h-6 text-sky-600"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75"
                aria-hidden="true"
              >
                <!-- Light bulb icon -->
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>

            <h3
              class="text-lg font-semibold text-slate-900 mb-3"
              style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'why.intuitive.title' | translate }}
            </h3>
            <p
              class="text-slate-500 text-sm leading-relaxed"
              style="font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
            >
              {{ 'why.intuitive.desc' | translate }}
            </p>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class WhyWeyproComponent {}
