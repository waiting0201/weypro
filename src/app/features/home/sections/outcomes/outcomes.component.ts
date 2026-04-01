import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-outcomes',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="outcomes" class="bg-white section-padding">
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
            {{ 'outcomes.label' | translate }}
          </div>

          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-5"
            style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif;"
          >
            {{ 'outcomes.title' | translate }}
          </h2>

          <div
            appAnimateOnScroll
            [delay]="160"
            class="w-16 h-1 rounded-full mx-auto"
            style="background: linear-gradient(90deg, #0284c7, #06b6d4);"
          ></div>
        </div>

        <!-- 3 persona cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Boss -->
          <div
            appAnimateOnScroll
            [delay]="100"
            class="relative rounded-2xl overflow-hidden cursor-default
                   transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                   box-shadow: 0 4px 20px rgba(15,23,42,0.2);"
          >
            <!-- Subtle glow -->
            <div
              class="absolute inset-0 rounded-2xl pointer-events-none"
              style="background: radial-gradient(ellipse at top left, rgba(2,132,199,0.12) 0%, transparent 60%);"
              aria-hidden="true"
            ></div>

            <div class="relative z-10 p-8">
              <!-- Icon -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style="background: rgba(2,132,199,0.15); border: 1px solid rgba(2,132,199,0.25);"
              >
                <svg class="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                  <!-- Briefcase icon -->
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>

              <!-- Role label -->
              <div
                class="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style="background: rgba(6,182,212,0.15); color: #67e8f9; border: 1px solid rgba(6,182,212,0.25);"
              >
                {{ 'outcomes.boss.role' | translate }}
              </div>

              <p
                class="text-base leading-relaxed"
                style="color: #e2e8f0; font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
              >
                {{ 'outcomes.boss.desc' | translate }}
              </p>
            </div>
          </div>

          <!-- Employee -->
          <div
            appAnimateOnScroll
            [delay]="200"
            class="relative rounded-2xl overflow-hidden cursor-default
                   transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                   box-shadow: 0 4px 20px rgba(15,23,42,0.2);"
          >
            <div
              class="absolute inset-0 rounded-2xl pointer-events-none"
              style="background: radial-gradient(ellipse at top right, rgba(6,182,212,0.12) 0%, transparent 60%);"
              aria-hidden="true"
            ></div>

            <div class="relative z-10 p-8">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style="background: rgba(2,132,199,0.15); border: 1px solid rgba(2,132,199,0.25);"
              >
                <svg class="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                  <!-- User icon -->
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <div
                class="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style="background: rgba(6,182,212,0.15); color: #67e8f9; border: 1px solid rgba(6,182,212,0.25);"
              >
                {{ 'outcomes.employee.role' | translate }}
              </div>

              <p
                class="text-base leading-relaxed"
                style="color: #e2e8f0; font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
              >
                {{ 'outcomes.employee.desc' | translate }}
              </p>
            </div>
          </div>

          <!-- Business -->
          <div
            appAnimateOnScroll
            [delay]="300"
            class="relative rounded-2xl overflow-hidden cursor-default
                   transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                   box-shadow: 0 4px 20px rgba(15,23,42,0.2);"
          >
            <div
              class="absolute inset-0 rounded-2xl pointer-events-none"
              style="background: radial-gradient(ellipse at bottom left, rgba(2,132,199,0.12) 0%, transparent 60%);"
              aria-hidden="true"
            ></div>

            <div class="relative z-10 p-8">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style="background: rgba(2,132,199,0.15); border: 1px solid rgba(2,132,199,0.25);"
              >
                <svg class="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                  <!-- Rocket / arrow trending up icon -->
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>

              <div
                class="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style="background: rgba(6,182,212,0.15); color: #67e8f9; border: 1px solid rgba(6,182,212,0.25);"
              >
                {{ 'outcomes.business.role' | translate }}
              </div>

              <p
                class="text-base leading-relaxed"
                style="color: #e2e8f0; font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
              >
                {{ 'outcomes.business.desc' | translate }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class OutcomesComponent {}
