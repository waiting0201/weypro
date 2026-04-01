import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AnimateOnScrollDirective } from '../../../../shared/directives/animate-on-scroll.directive';

interface Testimonial {
  initials: string;
  client: string;
  company: string;
  quote: string;
  color: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslatePipe, AnimateOnScrollDirective],
  template: `
    <section id="testimonials" class="bg-slate-50 section-padding overflow-hidden">
      <div class="max-w-6xl mx-auto">

        <!-- Section header -->
        <div class="text-center mb-14">
          <div
            appAnimateOnScroll
            [delay]="0"
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full
                   bg-blue-50 text-blue-600 text-sm font-medium mb-4"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
            Testimonials
          </div>
          <h2
            appAnimateOnScroll
            [delay]="100"
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900
                   tracking-tight mb-4"
          >
            {{ 'testimonials.title' | translate }}
          </h2>
          <div
            appAnimateOnScroll
            [delay]="150"
            class="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"
          ></div>
        </div>

        <!-- Horizontal scroll carousel -->
        <div
          appAnimateOnScroll
          [delay]="200"
        >
          <!-- Scroll container -->
          <div
            class="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory
                   scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0
                   lg:grid lg:grid-cols-3 lg:overflow-visible"
            style="scrollbar-width: none; -ms-overflow-style: none;"
          >
            @for (t of testimonials; track t.company) {
              <div
                class="group relative flex-shrink-0 w-[300px] sm:w-[340px]
                       lg:w-auto lg:flex-shrink snap-start
                       rounded-2xl bg-white border border-slate-100 p-7
                       shadow-sm hover:shadow-lg hover:-translate-y-1
                       transition-all duration-300"
              >
                <!-- Quote marks -->
                <div
                  class="absolute top-5 right-6 text-5xl leading-none font-serif
                         text-slate-100 select-none group-hover:text-blue-50
                         transition-colors duration-300"
                  aria-hidden="true"
                >
                  "
                </div>

                <!-- Star rating -->
                <div class="flex gap-1 mb-4" aria-label="5 star rating">
                  @for (star of fiveStars; track $index) {
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor"
                         viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  }
                </div>

                <!-- Quote text -->
                <p class="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                  "{{ t.quote }}"
                </p>

                <!-- Client info -->
                <div class="flex items-center gap-3">
                  <!-- Avatar circle with initials -->
                  <div
                    class="w-11 h-11 rounded-full flex items-center justify-center
                           text-white font-bold text-sm flex-shrink-0"
                    [style.background]="t.color"
                  >
                    {{ t.initials }}
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">{{ t.client }}</p>
                    <p class="text-xs text-slate-400">{{ t.company }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Pagination dots (visible on mobile/tablet) -->
        <div class="flex justify-center gap-2 mt-6 lg:hidden" aria-hidden="true">
          @for (t of testimonials; track t.company; let i = $index) {
            <span
              class="w-2 h-2 rounded-full transition-colors duration-200"
              [class.bg-blue-500]="i === 0"
              [class.bg-slate-300]="i !== 0"
            ></span>
          }
        </div>

      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  readonly fiveStars = [1, 2, 3, 4, 5];

  readonly testimonials: Testimonial[] = [
    {
      initials: 'SK',
      client: 'Creative Director',
      company: 'SUBKARMA',
      quote: '威庭科技的團隊非常專業，從需求確認到最後交付都非常順暢。我們的網站改版後流量提升了 40%，非常滿意！',
      color: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    },
    {
      initials: '元',
      client: '中心主任',
      company: '元智大學燃料電池中心',
      quote: '系統整合專案複雜度高，但威庭科技展現了卓越的技術能力，如期完成並超越預期效能指標。',
      color: 'linear-gradient(135deg, #7c3aed, #2563eb)',
    },
    {
      initials: 'KR',
      client: 'Managing Director',
      company: 'KRCNZ Ltd',
      quote: 'Working with Weypro was a seamless experience. Their AI integration solution reduced our customer response time by 60%.',
      color: 'linear-gradient(135deg, #0891b2, #06b6d4)',
    },
    {
      initials: '黑',
      client: '創意總監',
      company: '黑角極限創意',
      quote: '威庭的工程師理解力強、反應迅速，即使是最後一刻的修改也能迅速處理，是非常值得信賴的合作夥伴。',
      color: 'linear-gradient(135deg, #1e293b, #475569)',
    },
    {
      initials: '信',
      client: '資訊部主管',
      company: '信星鞋業',
      quote: '導入威庭科技的 ERP 系統後，我們的訂單管理效率大幅提升，庫存錯誤率也降低了 90% 以上。',
      color: 'linear-gradient(135deg, #dc2626, #ef4444)',
    },
    {
      initials: 'TA',
      client: '系統管理員',
      company: 'TAYA 大亞鏈條',
      quote: '客製化 CRM 系統完全符合我們的業務流程需求，售後服務也非常到位，問題反應處理迅速。',
      color: 'linear-gradient(135deg, #d97706, #f59e0b)',
    },
    {
      initials: '頂',
      client: '總經理',
      company: '頂威工業',
      quote: '威庭科技幫我們建立了完整的數位化平台，從網站到後台管理系統一應俱全，大幅降低了人工作業成本。',
      color: 'linear-gradient(135deg, #059669, #06b6d4)',
    },
  ];
}
