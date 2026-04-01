import { Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    @if (toastService.toast(); as t) {
      <div
        class="fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5
               rounded-xl shadow-xl text-sm font-medium
               animate-slide-in-right backdrop-blur-sm"
        [class]="t.type === 'success'
          ? 'bg-green-600/95 text-white'
          : 'bg-red-600/95 text-white'"
      >
        @if (t.type === 'success') {
          <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        } @else {
          <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        }
        <span>{{ t.message }}</span>
        <button
          (click)="toastService.dismiss()"
          class="ml-2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    }
  `,
  styles: [`
    @keyframes slide-in-right {
      from { opacity: 0; transform: translateX(1rem); }
      to   { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in-right {
      animation: slide-in-right 0.3s ease-out;
    }
  `],
})
export class ToastComponent {
  protected toastService = inject(ToastService);
}
