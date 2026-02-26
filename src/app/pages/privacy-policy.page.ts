import { Component } from '@angular/core';
import { LegalPageComponent } from '../shared/legal-page/legal-page';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [LegalPageComponent],
  template: `<app-legal-page type="privacy-policy" />`,
})
export class PrivacyPolicyPage {}