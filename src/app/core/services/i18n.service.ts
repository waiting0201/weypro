import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'zh-TW' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);
  private currentLang = signal<Lang>('zh-TW');
  private translations = signal<Record<string, string>>({});

  lang = this.currentLang.asReadonly();
  isZh = computed(() => this.currentLang() === 'zh-TW');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Lang;
      if (saved && (saved === 'zh-TW' || saved === 'en')) {
        this.setLanguage(saved);
      } else {
        this.setLanguage('zh-TW');
      }
    } else {
      this.setLanguage('zh-TW');
    }
  }

  async setLanguage(lang: Lang): Promise<void> {
    try {
      const data = await import(`../../i18n/${lang}.json`);
      this.translations.set(data.default || data);
      this.currentLang.set(lang);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant-TW' : 'en';
      }
    } catch (e) {
      console.error(`Failed to load language: ${lang}`, e);
    }
  }

  t(key: string): string {
    return this.translations()[key] ?? key;
  }

  toggleLanguage(): void {
    const next = this.currentLang() === 'zh-TW' ? 'en' : 'zh-TW';
    this.setLanguage(next);
  }
}
