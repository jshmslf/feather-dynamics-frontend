import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { NewsBar } from "./shared/news-bar/news-bar";
import { ScrollTopComponent } from "./shared/scroll-top/scroll-top";
import { Title } from '@angular/platform-browser';
import { GtmService } from './core/services/gtm.service';
import { filter } from 'rxjs';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NewsBar, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('fd-2');

  constructor(
    private router: Router,
    private title_route: Title,
    private gtm: GtmService,
    private seo: SeoService,
  ) { }
  
  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Feather Dynamics',
      description: 'Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications. Explore our next-gen solutions today.',
      image: 'https://featherdynamics.com/assets/fdmetapic.jpg',
      keywords: 'unmanned vehicles, autonomous systems, UAV, defense technology, unmanned aerial systems, UAS, autonomous vehicle design, robotic defense systems, next-gen autonomous technology, mission-critical unmanned vehicles, commercial autonomous flight solutions, tactical UAV development, autonomous ISR, autonomous system integration, edge computing for unmanned systems, UAV payload engineering, multi-domain autonomous platforms, autonomous innovation, UAV manufacturers, defense applications, autonomous mission-driven development',
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://featherdynamics.com/#website',
          url: 'https://featherdynamics.com',
          name: 'Feather Dynamics',
          description: "Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications."
        },
        {
          '@type': 'WebPage',
          '@id': 'https://featherdynamics.com/#webpage',
          url: 'https://featherdynamics.com',
          name: 'Feather Dynamics | Unmanned Vehicle Technology',
          description: "Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications.",
          isPartOf: { '@id': 'https://featherdynamics.com/#website' }
        },
        {
          '@type': 'Organization',
          '@id': 'https://featherdynamics.com/#organization',
          name: 'Feather Dynamics',
          url: 'https://featherdynamics.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://featherdynamics.com/assets/fdmetapic.jpg'
          },
          description: "Feather Dynamics has been innovating unmanned vehicle technology for nearly three decades, serving both commercial and defense applications. With a long-standing history of advancing autonomous systems, the company has consistently contributed to shaping the future of next-generation autonomous vehicles through design excellence, technical innovation, and mission-driven development.",
          founder: {
            '@type': 'Person',
            name: 'Rhandal Sayat',
            jobTitle: 'Chief Executive Officer',
            worksFor: { '@id': 'https://featherdynamics.com/#organization' }
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Investor Relations',
            email: 'info@featherdynamics.com',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://www.linkedin.com/company/featherdynamics'
          ]
        }
      ]
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.gtm.trackPageView(
        event.urlAfterRedirects,
        this.title_route.getTitle()
      )
    })
  }
}
