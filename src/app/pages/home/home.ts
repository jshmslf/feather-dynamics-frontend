import { Component, OnInit } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { WhoWeAre } from "../../shared/who-we-are/who-we-are";
import { WhatWeDo } from "../../shared/what-we-do/what-we-do";
import { Cta } from "../../shared/cta/cta";
import { Partners } from "../../shared/partners/partners";
import { Tag } from "../../shared/tag/tag";
import { Blog } from "../../shared/blog/blog";
import { AboutUs } from "../../shared/about-us/about-us";
import { ResearchDevelopmentComponent } from "../../shared/research-development/research-development";
import { DarpaBanner } from "../../shared/darpa-banner/darpa-banner";
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [Hero, WhoWeAre, WhatWeDo, Cta, Partners, Tag, Blog, AboutUs, ResearchDevelopmentComponent, DarpaBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(private seo: SeoService) { }
  
  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Feather Dynamics',
      description: 'Feather Dynamics leads the industry in unmanned vehicle technology and autonomous systems. With 30 years of innovation, we deliver mission-driven design for commercial and defense applications. Explore our next-gen solutions today.',
      image: 'https://featherdynamics.com/assets/fdmetapic.jpg',
      keywords: 'unmanned vehicles, autonomous systems, UAV, defense technology, unmanned aerial systems, UAS, autonomous vehicle design, robotic defense systems, next-gen autonomous technology, mission-critical unmanned vehicles, commercial autonomous flight solutions, tactical UAV development, autonomous ISR, autonomous system integration, edge computing for unmanned systems, UAV payload engineering, multi-domain autonomous platforms, autonomous innovation, UAV manufacturers, defense applications, autonomous mission-driven development',
    })

    this.seo.setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Feather Dynamics",
          "url": "https://featherdynamics.com",
          "logo": "https://featherdynamics.com/assets/fdmetapic.jpg",
          "sameAs": [
            "https://www.linkedin.com/company/featherdynamics",
          ]
        },
        {
          '@type':           'WebSite',    
          'name':            'Feather Dynamics',
          'url':             'https://featherdynamics.com',
          'potentialAction': {
              '@type':       'SearchAction',
              'target':      'https://featherdynamics.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
          }
        }
      ],
    })
  }
}
