import { Component, OnInit } from '@angular/core';
import { LegalPageComponent } from '../shared/legal-page/legal-page';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [LegalPageComponent],
  template: `<app-legal-page type="terms-and-conditions" />`,
})
export class TermsAndConditionsPage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Terms & Conditions | Feather Dynamics',
      description: 'Read the Feather Dynamics Terms and Conditions governing use of our website and services.',
      keywords: 'Feather Dynamics terms and conditions, terms of service, website terms, legal',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms and Conditions',
      url: 'https://featherdynamics.com/terms-and-conditions',
      publisher: { '@type': 'Organization', name: 'Feather Dynamics', url: 'https://featherdynamics.com' },
    });
    this.seo.generateBreadcrumbs();
  }
}
