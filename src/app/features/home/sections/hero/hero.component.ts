import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { ScrollService } from '../../../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section
      id="hero"
      class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0c1a2e 100%);"
    >
      <!-- Dot grid overlay -->
      <div
        class="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style="background-image: radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px);
               background-size: 32px 32px;"
      ></div>

      <!-- Glow orbs -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <!-- Top-left large orb -->
        <div
          class="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
          style="background: radial-gradient(circle at center, rgba(2,132,199,0.18) 0%, transparent 70%);"
        ></div>
        <!-- Bottom-right large orb -->
        <div
          class="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style="background: radial-gradient(circle at center, rgba(6,182,212,0.14) 0%, transparent 70%);"
        ></div>
        <!-- Center accent orb -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style="background: radial-gradient(circle at center, rgba(2,132,199,0.08) 0%, transparent 65%);"
        ></div>
      </div>

      <!-- Floating geometric shapes -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <!-- Hexagon outline top-right -->
        <div
          class="absolute top-16 right-[10%] w-20 h-20 opacity-[0.07] float-slow"
          style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                 background: linear-gradient(135deg, #0284c7, #06b6d4);"
        ></div>
        <!-- Small circle top-left -->
        <div
          class="absolute top-28 left-[8%] w-10 h-10 rounded-full opacity-[0.09] float-medium"
          style="border: 2px solid #06b6d4;"
        ></div>
        <!-- Large circle outline bottom-left -->
        <div
          class="absolute bottom-24 left-[12%] w-32 h-32 rounded-full opacity-[0.06] float-slow"
          style="border: 1.5px solid #0284c7; animation-delay: 2s;"
        ></div>
        <!-- Hexagon outline bottom-right -->
        <div
          class="absolute bottom-20 right-[15%] w-14 h-14 opacity-[0.08] float-medium"
          style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                 border: 1.5px solid #06b6d4;
                 background: transparent;
                 outline: 1.5px solid rgba(6,182,212,0.5);
                 animation-delay: 1.5s;"
        ></div>
        <!-- Tiny dot cluster mid-right -->
        <div
          class="absolute top-1/3 right-[5%] w-24 h-24 opacity-[0.12]"
          style="background-image: radial-gradient(circle, #06b6d4 1.5px, transparent 1.5px);
                 background-size: 12px 12px;"
        ></div>
        <!-- Rotate square mid-left -->
        <div
          class="absolute top-[45%] left-[6%] w-8 h-8 opacity-[0.08] float-slow"
          style="border: 1.5px solid #0284c7; transform: rotate(45deg); animation-delay: 3s;"
        ></div>
      </div>

      <!-- Main content -->
      <div class="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center flex-1 flex flex-col items-center justify-center py-24">

        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full
                 border border-sky-500/30 text-sky-400 text-sm font-medium mb-10
                 fade-in-down"
          style="background: rgba(2,132,199,0.1);"
        >
          <span
            class="w-2 h-2 rounded-full inline-block"
            style="background-color: #06b6d4; box-shadow: 0 0 6px #06b6d4; animation: pulse 2s infinite;"
          ></span>
          {{ 'hero.badge' | translate }}
        </div>

        <!-- Headline -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
                 leading-tight tracking-tight mb-7 fade-in-up"
          style="font-family: 'Plus Jakarta Sans', 'Noto Sans TC', sans-serif; animation-delay: 0.1s;"
        >
          <span
            style="background: linear-gradient(90deg, #38bdf8 0%, #0284c7 40%, #06b6d4 100%);
                   -webkit-background-clip: text;
                   -webkit-text-fill-color: transparent;
                   background-clip: text;"
          >
            {{ 'hero.headline' | translate }}
          </span>
        </h1>

        <!-- Subheadline -->
        <p
          class="text-lg sm:text-xl md:text-2xl leading-relaxed mb-14
                 max-w-3xl mx-auto fade-in-up"
          style="color: #94a3b8; animation-delay: 0.22s; font-family: 'DM Sans', 'Noto Sans TC', sans-serif;"
        >
          {{ 'hero.subheadline' | translate }}
        </p>

        <!-- CTA buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up"
          style="animation-delay: 0.38s;"
        >
          <!-- Primary CTA -->
          <button
            (click)="scrollTo('contact')"
            class="group inline-flex items-center gap-2.5 px-9 py-4 rounded-xl
                   font-semibold text-base text-white
                   transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            style="background: #0284c7;
                   box-shadow: 0 4px 24px rgba(2,132,199,0.35);"
            onmouseenter="this.style.boxShadow='0 6px 36px rgba(2,132,199,0.55)'; this.style.transform='translateY(-2px)';"
            onmouseleave="this.style.boxShadow='0 4px 24px rgba(2,132,199,0.35)'; this.style.transform='translateY(0)';"
          >
            {{ 'hero.cta.primary' | translate }}
            <svg
              class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <!-- Secondary CTA -->
          <button
            (click)="scrollTo('services')"
            class="group inline-flex items-center gap-2.5 px-9 py-4 rounded-xl
                   font-semibold text-base
                   transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            style="border: 1.5px solid rgba(2,132,199,0.5); color: #7dd3fc; background: rgba(2,132,199,0.06);"
            onmouseenter="this.style.background='rgba(2,132,199,0.14)'; this.style.borderColor='rgba(2,132,199,0.8)'; this.style.transform='translateY(-2px)';"
            onmouseleave="this.style.background='rgba(2,132,199,0.06)'; this.style.borderColor='rgba(2,132,199,0.5)'; this.style.transform='translateY(0)';"
          >
            {{ 'hero.cta.secondary' | translate }}
            <svg
              class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="relative z-10 flex flex-col items-center gap-2 mb-10 scroll-bounce"
        aria-hidden="true"
      >
        <span
          class="text-xs tracking-[0.3em] uppercase font-medium"
          style="color: #475569;"
        >{{ 'hero.scroll' | translate }}</span>
        <svg
          class="w-5 h-5"
          style="color: #475569;"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <style>
        /* Floating shapes */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-22px) rotate(4deg); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-14px) rotate(-3deg); }
        }
        .float-slow   { animation: floatSlow 8s ease-in-out infinite; }
        .float-medium { animation: floatMedium 5.5s ease-in-out infinite; animation-delay: 1.2s; }

        /* Entrance animations */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in-down { animation: fadeInDown 0.75s ease-out both; }
        .fade-in-up   { animation: fadeInUp 0.75s ease-out both; }

        /* Scroll bounce */
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(9px); opacity: 1; }
        }
        .scroll-bounce { animation: scrollBounce 2.2s ease-in-out infinite; }

        /* Pulse for badge dot */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      </style>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  private scroll = inject(ScrollService);

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}
