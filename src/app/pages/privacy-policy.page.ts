import { Component, OnInit } from '@angular/core';
import { LegalPageComponent } from '../shared/legal-page/legal-page';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [LegalPageComponent],
  template: `<app-legal-page type="privacy-policy" />`,
})
export class PrivacyPolicyPage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Privacy Policy | Feather Dynamics',
      description: 'Read the Feather Dynamics Privacy Policy. Learn how we collect, use, and protect your information on our website.',
      keywords: 'Feather Dynamics privacy policy, data protection, personal information, privacy',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      url: 'https://featherdynamics.com/privacy-policy',
      publisher: { '@type': 'Organization', name: 'Feather Dynamics', url: 'https://featherdynamics.com' },
    });
    this.seo.generateBreadcrumbs();
  }
}
