import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

interface ProcessStep {
  num: number;
  delay: number;
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="process" class="bg-slate-50 section-padding">
      <div class="max-w-6xl mx-auto">

        <!-- Section header -->
        <div class="text-center mb-16">
          <div
            appAnimateOnScroll
            [delay]="0"
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                   bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-5"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-500 inline-block"></span>
            {{ 'process.label' | translate }}
          </div>
          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-5 font-heading"
          >
            {{ 'process.title' | translate }}
          </h2>
          <div
            appAnimateOnScroll
            [delay]="150"
            class="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto"
          ></div>
        </div>

        <!-- ─────────────────────────────────────────
             Desktop: horizontal timeline (lg+)
             ───────────────────────────────────────── -->
        <div class="hidden lg:block">

          <!-- Circles row with connector lines -->
          <div class="relative flex items-center justify-between mb-10 px-[3.5rem]">

            <!-- Full-width connector line behind circles -->
            <div class="absolute inset-x-[3.5rem] top-1/2 -translate-y-1/2 pointer-events-none"
                 aria-hidden="true">
              <!-- Dashed gradient line -->
              <svg class="w-full" height="2" preserveAspectRatio="none">
                <line x1="0" y1="1" x2="100%" y2="1"
                      stroke="url(#processLineGrad)" stroke-width="2"
                      stroke-dasharray="6 5" />
                <defs>
                  <linearGradient id="processLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stop-color="#38bdf8" />
                    <stop offset="100%" stop-color="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            @for (step of steps; track step.num) {
              <div
                appAnimateOnScroll
                [delay]="step.delay"
                class="relative z-10 flex flex-col items-center"
              >
                <!-- Outer ring (glow) -->
                <div class="w-16 h-16 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-sky-500 to-cyan-500
                            shadow-lg shadow-sky-500/30
                            ring-4 ring-white">
                  <span class="text-white font-bold text-xl font-heading">{{ step.num }}</span>
                </div>
              </div>
            }
          </div>

          <!-- Cards row aligned under circles -->
          <div class="grid grid-cols-4 gap-4">
            @for (step of steps; track step.num) {
              <div
                appAnimateOnScroll
                [delay]="step.delay + 120"
                class="group rounded-2xl bg-white border border-slate-100
                       shadow-sm p-5 hover:shadow-lg hover:-translate-y-1
                       transition-all duration-300 cursor-default"
              >
                <!-- Step label accent -->
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xs font-semibold text-sky-500 uppercase tracking-widest">
                    {{ 'process.stepPrefix' | translate }} {{ step.num }}
                  </span>
                </div>
                <h3 class="font-semibold text-slate-900 text-sm mb-2 font-heading leading-snug">
                  {{ ('process.step' + step.num + '.title') | translate }}
                </h3>
                <p class="text-xs text-slate-500 leading-relaxed">
                  {{ ('process.step' + step.num + '.desc') | translate }}
                </p>
              </div>
            }
          </div>
        </div>

        <!-- ─────────────────────────────────────────
             Mobile: vertical timeline (up to lg)
             ───────────────────────────────────────── -->
        <div class="flex flex-col gap-0 lg:hidden">
          @for (step of steps; track step.num; let isLast = $last) {
            <div
              appAnimateOnScroll
              [delay]="step.delay"
              class="flex gap-5"
            >
              <!-- Left column: circle + vertical line -->
              <div class="flex flex-col items-center flex-shrink-0 w-12">
                <!-- Circle -->
                <div class="w-12 h-12 rounded-full flex items-center justify-center
                            bg-gradient-to-br from-sky-500 to-cyan-500
                            shadow-md shadow-sky-500/25
                            ring-4 ring-slate-50 z-10 flex-shrink-0">
                  <span class="text-white font-bold text-base font-heading">{{ step.num }}</span>
                </div>
                <!-- Connector line -->
                @if (!isLast) {
                  <div class="flex-1 w-px my-1.5 min-h-6"
                       style="background: linear-gradient(to bottom, #38bdf8, #06b6d4);
                              background-size: 1px 12px;
                              background-repeat: repeat-y;"></div>
                }
              </div>

              <!-- Right column: card content -->
              <div class="flex-1 min-w-0 pb-7" [class.pb-0]="isLast">
                <div class="bg-white border border-slate-100 rounded-2xl shadow-sm
                            p-5 hover:shadow-md transition-shadow duration-300">
                  <div class="mb-2">
                    <span class="text-xs font-semibold text-sky-500 uppercase tracking-widest">
                      {{ 'process.stepPrefix' | translate }} {{ step.num }}
                    </span>
                  </div>
                  <h3 class="font-semibold text-slate-900 text-sm mb-1.5 font-heading">
                    {{ ('process.step' + step.num + '.title') | translate }}
                  </h3>
                  <p class="text-xs text-slate-500 leading-relaxed">
                    {{ ('process.step' + step.num + '.desc') | translate }}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
})
export class ProcessComponent {
  readonly steps: ProcessStep[] = [
    { num: 1, delay: 100 },
    { num: 2, delay: 200 },
    { num: 3, delay: 300 },
    { num: 4, delay: 400 },
  ];
}
