import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ContactForm {
  company: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
  turnstileToken: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private http = inject(HttpClient);

  submit(form: ContactForm) {
    return this.http.post('/api/contact', form);
  }
}
