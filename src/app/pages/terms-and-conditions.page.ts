import { Component } from '@angular/core';
import { LegalPageComponent } from '../shared/legal-page/legal-page';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [LegalPageComponent],
  template: `<app-legal-page type="terms-and-conditions" />`,
})
export class TermsAndConditionsPage {}