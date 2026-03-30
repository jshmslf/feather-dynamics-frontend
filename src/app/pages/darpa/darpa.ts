import {
  Component,
  AfterViewInit,
  OnDestroy,
  QueryList,
  ViewChildren,
  ElementRef,
  PLATFORM_ID,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PageHeader } from '../../shared/page-header/page-header';
import { Cta } from '../../shared/cta/cta';
import { SeoService } from '../../core/services/seo.service';
import { GtmService } from '../../core/services/gtm.service';

export interface TimelineEntry {
  date: string;
  label: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  tag?: string;
}

@Component({
  selector: 'app-darpa',
  imports: [CommonModule, PageHeader, Cta],
  templateUrl: './darpa.html',
  styleUrl: './darpa.scss',
})
export class Darpa implements AfterViewInit, OnDestroy, OnInit {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private observer?: IntersectionObserver;

  constructor(
    private seo: SeoService,
    private gtm: GtmService,
  ) { }

  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef<HTMLElement>>;

  entries: TimelineEntry[] = [
    {
      date: '2026',
      label: 'Development',
      title: 'Development with CSUMB Mechatronics Department',
      description: 'Active collaboration with the California State University Monterey Bay Mechatronics Department to design, build, and iterate on the platform competing in the DARPA LIFT Challenge.',
      status: 'active',
      tag: 'In Progress',
    },
    {
      date: 'May 2026',
      label: 'Flight Test',
      title: 'First Flight',
      description: 'First full flight of the Feather Dynamics platform developed in collaboration with the CSUMB Mechatronics Department. A critical milestone validating the complete system integration.',
      status: 'upcoming',
      tag: 'Upcoming',
    },
    {
      date: 'August 2026',
      label: 'Challenge Event',
      title: 'DARPA LIFT Challenge Event',
      description: 'Live demonstration and evaluation at the DARPA LIFT Challenge event. Feather Dynamics competes on the national stage with its next-generation unmanned platform.',
      status: 'upcoming',
      tag: 'Target',
    },
  ];

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'DARPA LIFT Challenge | Feather Dynamics',
      description: 'Feather Dynamics is developing the next generation of unmanned aerial platforms for the DARPA LIFT Challenge. Learn about our progress and upcoming milestones.',
      image: 'https://featherdynamics.com/assets/fdmetapic-darpa.png',
      keywords: 'DARPA LIFT, unmanned aerial platforms, Feather Dynamics, robotics, autonomous systems, UAV, defense technology, next-generation flight, aerospace engineering, CSUMB, mechatronics, unmanned vehicle technology, autonomous vehicle design, defense applications, UAV payload engineering, multi-domain autonomous platforms, autonomous innovation, UAV manufacturers, tactical UAV development, autonomous ISR, autonomous system integration, edge computing for unmanned systems, mission-critical unmanned vehicles, commercial autonomous flight solutions',
    });

    this.seo.setJsonLd({
            '@context':         'https://schema.org',
            '@type':            'WebPage',
            'name':             'DARPA LiFT | Feather Dynamics',
            'url':              'https://featherdynamics.com/darpa-lift',
            'description':      'Feather Dynamics is a participant in the DARPA Lifting Insect-inspired Flight Technology (LiFT) program, developing next-generation autonomous micro aerial vehicle systems for defense applications.',
            'image':            'https://featherdynamics.com/assets/fdmetapic-darpa.png',
            'inLanguage':       'en-US',
            'isPartOf': {
                '@type':  'WebSite',
                'name':   'Feather Dynamics',
                'url':    'https://featherdynamics.com'
            },
            'about': {
                '@type':       'ResearchProject',
                'name':        'DARPA LiFT Program',
                'url':         'https://www.darpa.mil',
                'funder': {
                    '@type':  'GovernmentOrganization',
                    'name':   'Defense Advanced Research Projects Agency (DARPA)',
                    'url':    'https://www.darpa.mil'
                }
            },
            'author': {
                '@type':  'Organization',
                'name':   'Feather Dynamics',
                'url':    'https://featherdynamics.com',
                'logo':   'https://featherdynamics.com/assets/fdmetapic.jpg'
            },
            'breadcrumb': {
                '@type':           'BreadcrumbList',
                'itemListElement': [
                    {
                        '@type':    'ListItem',
                        'position': 1,
                        'name':     'Home',
                        'item':     'https://featherdynamics.com'
                    },
                    {
                        '@type':    'ListItem',
                        'position': 2,
                        'name':     'DARPA LiFT',
                        'item':     'https://featherdynamics.com/darpa-lift'
                    }
                ]
            }
        });
  }

  onLearnMoreClick(): void {
    this.gtm.trackEvent('cta_label', {
      cta_label: 'Learn More',
      page: '/darpa-lift'
    });
}

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.timelineItems.forEach((item) => this.observer!.observe(item.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
