import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PageHeader } from '../../shared/page-header/page-header';
import { SeoService } from '../../core/services/seo.service';

interface Platform {
  index: string;
  category: string;
  title: string;
  body: string;
  tag: string;
  image: string;
}

@Component({
  selector: 'app-what',
  standalone: true,
  imports: [CommonModule, PageHeader],
  templateUrl: './what.html',
  styleUrls: ['./what.scss']
})
export class What implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('platformCard') cards!: QueryList<ElementRef>;

  // Header element refs for intro animations
  @ViewChild('headerRule') headerRuleRef!: ElementRef;
  @ViewChild('headerMeta') headerMetaRef!: ElementRef;
  @ViewChild('sectionTitle') sectionTitleRef!: ElementRef;
  @ViewChild('sectionSub') sectionSubRef!: ElementRef;
  @ViewChild('sectionFooter') sectionFooterRef!: ElementRef;

  isBrowser: boolean;
  activeIndex: number = -1;
  private observer!: IntersectionObserver;

  platforms: Platform[] = [
    {
      index: '01',
      category: 'Aerial Systems',
      title: 'Defence & Security Platforms',
      tag: 'Patented Technology',
      image: '/assets/drones/fd_drone_2-1.png',
      body: `Feather Dynamics' Defense & Security Platforms comprise a family of advanced aerial UAVs engineered to support the evolving operational needs of the United States Department of War and its allied partners. Made in the USA, these systems are built on patented technologies and developed under strict standards, delivering durability, survivability, and reliability in contested and austere environments. Each platform features a modular airframe architecture, enabling rapid configuration for intelligence, surveillance, reconnaissance and tactical support missions. AI-enabled autonomy enhances intelligent flight performance, target tracking, and mission execution, while advanced secure communications and onboard processing deliver superior situational awareness in real time.`
    },
    {
      index: '02',
      category: 'Logistics & Transport',
      title: 'Cargo & Mobility Platform',
      tag: 'Commercial · Defense · Unmanned',
      image: '/assets/drones/fd_drone_4.png',
      body: `Feather Dynamics' Cargo & Mobility Platforms are unmanned aerial systems designed to support reliable cargo transport and operational mobility across both commercial and defense applications. Designed and manufactured in the United States, these platforms are built to perform consistently in demanding, time-sensitive environments. The aircraft feature a cargo-first, modular airframe that enables efficient transport of equipment, supplies, and specialized payloads over short- and medium-range distances. AI-driven autonomy supports precise navigation, autonomous flight operations, and adaptive route planning, allowing transport and resupply missions to be carried out with reduced operator involvement.`
    },
    {
      index: '03',
      category: 'Mission Systems',
      title: 'Payloads & Integrated Systems',
      tag: 'EO/IR · Sensor Fusion · Modular',
      image: '/assets/drones/fd_drone_7.png',
      body: `Feather Dynamics' Payloads & Integrated Systems portfolio delivers a range of mission-focused subsystems designed to enhance UAV capability, effectiveness, and situational awareness across defense and security operations. Core offerings include advanced electro-optical and infrared surveillance systems, gyro-stabilized weapons turret assemblies, and other modular mission payloads deployed on unmanned aircraft for intelligence, surveillance, reconnaissance, and force protection roles. AI-enabled sensor fusion supports real-time data analysis, target tracking, and operator decision support, while stabilized mounting ensures consistent performance during dynamic flight conditions.`
    },
    {
      index: '04',
      category: 'Innovation',
      title: 'Research & Development Capabilities',
      tag: 'Next-Gen · Licensing · Procurement',
      image: '/assets/drones/fd_drone_6.png',
      body: `Feather Dynamics' Research & Development division delivers cutting-edge technical research and innovation for defense, security, and commercial applications. Focused on exploring advanced UAV technologies, autonomous systems, sensor integration, and mission-specific solutions, this team drives the creation of next-generation mission critical technologies. Many R&D initiatives are designed to transition seamlessly into commercial products, offering customers access through direct procurement or licensing agreements. By combining deep technical expertise with practical operational insight, Feather Dynamics' R&D efforts accelerate the development of innovative, scalable, and mission-ready solutions.`
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private seo: SeoService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'What We Do | Feather Dynamics',
      description: 'Explore Feather Dynamics\' capabilities in autonomous vehicle design, defense systems, and commercial UAV development.',
      keywords: 'unmanned aerial vehicles, UAV, autonomous systems, defense technology, commercial UAV, Feather Dynamics, aerospace engineering, robotics, mission systems, R&D, sensor fusion, AI autonomy, secure communications, UAV payloads, defense platforms, cargo transport drones, surveillance systems, ISR, tactical support, unmanned vehicle technology, next-generation UAV, autonomous flight, mission-critical systems, UAV manufacturers, defense applications, UAV development, autonomous vehicle design'
    });

    this.seo.generateBreadcrumbs();
    this.seo.setJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Unmanned Vehicle Technology',
        'url': 'https://featherdynamics.com/what-we-do',
        'description': 'Autonomous vehicle design, defense systems, and commercial UAV development.',
        'provider': {
            '@type': 'Organization',
            'name': 'Feather Dynamics',
            'url': 'https://featherdynamics.com'
        },
        'areaServed': 'Worldwide',
        'serviceType': [
            'Autonomous UAV Systems',
            'Defense Technology',
            'Commercial Unmanned Vehicles'
        ]
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => this.initScrollObserver(), 100);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.observer) {
      this.observer.disconnect();
    }
  }

  private initScrollObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    // Observe platform cards
    this.cards?.forEach(card => {
      this.observer.observe(card.nativeElement);
    });

    // Observe header elements
    const headerTargets = [
      this.headerRuleRef,
      this.headerMetaRef,
      this.sectionTitleRef,
      this.sectionSubRef,
      this.sectionFooterRef
    ];

    headerTargets.forEach(ref => {
      if (ref?.nativeElement) {
        this.observer.observe(ref.nativeElement);
      }
    });
  }

  setActive(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}