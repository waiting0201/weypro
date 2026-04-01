import {
  Component,
  inject,
  signal,
  computed,
  afterNextRender,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../../core/services/i18n.service';
import { ScrollService } from '../../../core/services/scroll.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface NavItem {
  key: string;
  sectionId: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.shadow-md]="isScrolled()"
      [class.bg-white]="isScrolled()"
      style="font-family: var(--font-family-body);"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">

          <!-- Logo — image replaces text/icon when not scrolled and when scrolled -->
          <button
            (click)="scrollToTop()"
            class="flex items-center gap-2 group focus:outline-none"
            aria-label="威庭科技 Weypro Technology - 回到頂部"
          >
            <img
              src="assets/images/logo.png"
              alt="Weypro Technology 威庭科技"
              class="h-8 w-auto transition-all duration-300"
            />
          </button>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-1" aria-label="主選單">
            @for (item of navItems; track item.key) {
              <button
                (click)="scrollTo(item.sectionId)"
                class="px-3 py-2 text-sm font-medium rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1
                       transition-colors duration-150"
                [class.text-white]="!isScrolled()"
                [class.hover:bg-white/15]="!isScrolled()"
                [class.hover:text-white]="!isScrolled()"
                [class.text-slate-600]="isScrolled()"
                [class.hover:text-sky-600]="isScrolled()"
                [class.hover:bg-sky-50]="isScrolled()"
              >
                {{ item.key | translate }}
              </button>
            }
          </nav>

          <!-- Right Controls -->
          <div class="flex items-center gap-2">
            <!-- Language Toggle -->
            <button
              (click)="toggleLanguage()"
              class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium
                     rounded-full
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1
                     transition-all duration-150"
              [class.border]="true"
              [class.border-white/40]="!isScrolled()"
              [class.text-white]="!isScrolled()"
              [class.hover:bg-white/15]="!isScrolled()"
              [class.border-slate-200]="isScrolled()"
              [class.text-slate-600]="isScrolled()"
              [class.hover:border-sky-400]="isScrolled()"
              [class.hover:text-sky-600]="isScrolled()"
              [class.hover:bg-sky-50]="isScrolled()"
              [attr.aria-label]="isZh() ? '切換至英文' : 'Switch to Chinese'"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{{ isZh() ? 'EN' : '繁中' }}</span>
            </button>

            <!-- Mobile Hamburger -->
            <button
              (click)="toggleMobileMenu()"
              class="lg:hidden p-2 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1
                     transition-colors duration-150"
              [class.text-white]="!isScrolled()"
              [class.hover:bg-white/15]="!isScrolled()"
              [class.text-slate-600]="isScrolled()"
              [class.hover:text-sky-600]="isScrolled()"
              [class.hover:bg-sky-50]="isScrolled()"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-controls="mobile-menu"
              aria-label="開啟選單"
            >
              @if (mobileMenuOpen()) {
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              } @else {
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu — always white background for readability -->
      <div
        id="mobile-menu"
        class="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        [style.max-height]="mobileMenuOpen() ? '600px' : '0px'"
        [style.opacity]="mobileMenuOpen() ? '1' : '0'"
        [attr.aria-hidden]="!mobileMenuOpen()"
      >
        <div class="bg-white border-t border-slate-100 px-4 py-3 shadow-lg">
          <nav class="flex flex-col gap-1" aria-label="行動選單">
            @for (item of navItems; track item.key) {
              <button
                (click)="scrollToAndClose(item.sectionId)"
                class="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 rounded-xl
                       hover:text-sky-600 hover:bg-sky-50
                       focus:outline-none focus:ring-2 focus:ring-sky-500
                       transition-colors duration-150"
              >
                {{ item.key | translate }}
              </button>
            }

            <!-- Mobile Language Toggle -->
            <button
              (click)="toggleLanguage()"
              class="w-full text-left px-4 py-3 text-sm font-medium text-slate-500 rounded-xl
                     hover:text-sky-600 hover:bg-sky-50
                     focus:outline-none focus:ring-2 focus:ring-sky-500
                     transition-colors duration-150 flex items-center gap-2 mt-1 border-t border-slate-100 pt-3"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{{ isZh() ? 'Switch to English' : '切換至繁中' }}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Spacer to prevent content overlap — only when not over dark hero -->
    <div class="h-16" aria-hidden="true"></div>
  `,
})
export class HeaderComponent {
  private i18n = inject(I18nService);
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  isZh = computed(() => this.i18n.isZh());

  // testimonials section excluded per design decision
  readonly navItems: NavItem[] = [
    { key: 'nav.about',   sectionId: 'about' },
    { key: 'nav.why',     sectionId: 'why' },
    { key: 'nav.services', sectionId: 'services' },
    { key: 'nav.process', sectionId: 'process' },
    { key: 'nav.outcomes', sectionId: 'outcomes' },
    { key: 'nav.contact', sectionId: 'contact' },
  ];

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        const handleScroll = () => {
          this.isScrolled.set(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();
      }
    });
  }

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  scrollToAndClose(sectionId: string): void {
    this.mobileMenuOpen.set(false);
    // Small delay so menu close animation plays before scroll
    setTimeout(() => {
      this.scrollService.scrollTo(sectionId);
    }, 150);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  toggleLanguage(): void {
    this.i18n.toggleLanguage();
  }
}
