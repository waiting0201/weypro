import { Directive, ElementRef, inject, input, afterNextRender, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  delay = input<number>(0);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const element = this.el.nativeElement as HTMLElement;
      element.setAttribute('data-animate', '');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animate-visible');
            }, this.delay());
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(element);
    });
  }
}
