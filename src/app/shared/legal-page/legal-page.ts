import {
  Component,
  OnInit,
  Input,
  Inject,
  PLATFORM_ID,
  ChangeDetectionStrategy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

export type LegalType = 'privacy-policy' | 'terms-and-conditions';

interface LegalMeta {
  title: string;
  subtitle: string;
  effectiveDate: string;
  siteCovered: string;
  markdownSrc: string;
}

const LEGAL_META: Record<LegalType, LegalMeta> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your information.',
    effectiveDate: 'January 2026',
    siteCovered: 'featherdynamics.com, featherdynamic.com',
    markdownSrc: 'assets/legal/privacy-policy.md',
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    subtitle: 'The rules and guidelines for using our services.',
    effectiveDate: 'January 2026',
    siteCovered: 'featherdynamics.com, featherdynamic.com',
    markdownSrc: 'assets/legal/terms-and-conditions.md',
  },
};

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './legal-page.html',
  styleUrls: ['./legal-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalPageComponent implements OnInit {
  @Input() type: LegalType = 'privacy-policy';

  meta!: LegalMeta;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.meta = LEGAL_META[this.type];
  }
}