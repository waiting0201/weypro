import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { WhyWeyproComponent } from './sections/why-weypro/why-weypro.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProcessComponent } from './sections/process/process.component';
import { OutcomesComponent } from './sections/outcomes/outcomes.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    WhyWeyproComponent,
    ServicesComponent,
    ProcessComponent,
    OutcomesComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-why-weypro />
    <app-services />
    <app-process />
    <app-outcomes />
    <app-contact />
  `,
})
export class HomeComponent {}
