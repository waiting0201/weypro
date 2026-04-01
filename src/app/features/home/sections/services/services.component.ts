import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="services" class="bg-white section-padding">
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
            {{ 'services.label' | translate }}
          </div>
          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-5 font-heading"
          >
            {{ 'services.title' | translate }}
          </h2>
          <div
            appAnimateOnScroll
            [delay]="150"
            class="w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 mx-auto"
          ></div>
        </div>

        <!-- 3 cards in single row -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">

          <!-- Card 1: Simplify -->
          <div
            appAnimateOnScroll
            [delay]="100"
            class="group relative rounded-2xl p-7 bg-white border border-slate-100
                   shadow-sm hover:shadow-xl hover:-translate-y-1.5
                   transition-all duration-300 cursor-default overflow-hidden"
          >
            <!-- Hover accent -->
            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                 aria-hidden="true"></div>
            <!-- Icon -->
            <div class="w-11 h-11 rounded-xl bg-sky-50 group-hover:bg-sky-100
                        flex items-center justify-center mb-5 transition-colors duration-300">
              <svg class="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                <!-- Puzzle / link icon -->
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003
                         0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349
                         1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0
                         01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355
                         0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875
                         1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128
                         1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039
                         48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0
                         00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0
                         01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875
                         1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349
                         1.003-.215.283-.401.604-.401.959v0c0 .31.26.555.57.532a48.07
                         48.07 0 005.054-.642A8.083 8.083 0 0021 12.026c0-4.418-3.582-8-8-8
                         a8.006 8.006 0 00-5.855 2.555" />
              </svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-2.5 font-heading">
              {{ 'services.simplify.title' | translate }}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              {{ 'services.simplify.desc' | translate }}
            </p>
          </div>

          <!-- Card 2 (FEATURED): Understand -->
          <div
            appAnimateOnScroll
            [delay]="200"
            class="group relative rounded-2xl overflow-hidden cursor-default
                   shadow-xl shadow-sky-600/25 hover:shadow-2xl hover:shadow-sky-600/35
                   hover:-translate-y-1.5 transition-all duration-300"
            style="background: linear-gradient(135deg, #0284c7 0%, #0f172a 60%, #06b6d4 100%);"
          >
            <!-- Dot grid texture -->
            <div class="absolute inset-0 opacity-[0.07] pointer-events-none"
                 aria-hidden="true"
                 style="background-image: radial-gradient(circle, white 1px, transparent 1px);
                        background-size: 22px 22px;"></div>
            <!-- Glow orbs -->
            <div class="absolute -top-8 -right-8 w-36 h-36 rounded-full
                        bg-cyan-400/20 pointer-events-none blur-xl" aria-hidden="true"></div>
            <div class="absolute -bottom-8 -left-8 w-28 h-28 rounded-full
                        bg-sky-300/20 pointer-events-none blur-xl" aria-hidden="true"></div>

            <div class="relative z-10 p-7 flex flex-col h-full">
              <div class="mb-5">
                <div class="w-11 h-11 rounded-xl bg-white/15 border border-white/20
                            flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                    <!-- Chat bubble icon -->
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-base font-bold text-white mb-2.5 font-heading">
                {{ 'services.understand.title' | translate }}
              </h3>
              <p class="text-sm text-sky-100/80 leading-relaxed">
                {{ 'services.understand.desc' | translate }}
              </p>
            </div>
          </div>

          <!-- Card 3: Analytics -->
          <div
            appAnimateOnScroll
            [delay]="300"
            class="group relative rounded-2xl p-7 bg-white border border-slate-100
                   shadow-sm hover:shadow-xl hover:-translate-y-1.5
                   transition-all duration-300 cursor-default overflow-hidden"
          >
            <div class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                 aria-hidden="true"></div>
            <div class="w-11 h-11 rounded-xl bg-sky-50 group-hover:bg-sky-100
                        flex items-center justify-center mb-5 transition-colors duration-300">
              <svg class="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                <!-- Chart bar icon -->
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-2.5 font-heading">
              {{ 'services.analytics.title' | translate }}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed">
              {{ 'services.analytics.desc' | translate }}
            </p>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class ServicesComponent {}
