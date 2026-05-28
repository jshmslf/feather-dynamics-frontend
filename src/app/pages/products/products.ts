import {
  AfterViewInit,
  Component,
  OnInit,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';
import { Cta } from '../../shared/cta/cta';
import { ModelViewer } from '../../shared/model-viewer/model-viewer';
import { SeoService } from '../../core/services/seo.service';

interface DisplayState {
  positionX: number; positionY: number;
  rotationX: number; rotationY: number; rotationZ: number;
  scaleValue: number; cameraZ: number;
}

interface Product {
  name: string;
  label: string;
  tagline: string;
  body: string;
  route: string;
  modelPath: string;
  displayState: DisplayState;
  tags: string[];
  badges: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeader, Cta, ModelViewer],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  @ViewChildren(ModelViewer) viewers!: QueryList<ModelViewer>;

  products: Product[] = [
    {
      name: 'Delta Y4',
      label: '[ TACTICAL ISR PLATFORM ]',
      tagline: 'Engineered for Contested Spaces.',
      body: 'Squad-portable multirotor for tactical reconnaissance in obstacle-dense and GPS-contested environments.',
      route: '/solutions/delta-y4',
      modelPath: '/assets/DeltaV3_BodyM_ASSM.stl',
      displayState: { positionX: 0, positionY: 5, rotationX: -0.99, rotationY: 0.2, rotationZ: 1.26, scaleValue: 1.4, cameraZ: 180 },
      tags: ['Drone Dominance Program', 'Blue UAS Select', 'NDAA-Compliant', 'Made in USA'],
      badges: [
        '/assets/badges/Blue UAS.png',
        '/assets/badges/NDAA Compliance.png',
        '/assets/badges/made-in-usa.png',
      ],
    },
    {
      name: 'PathFinder',
      label: '[ EXPENDABLE SCOUT UAV ]',
      tagline: 'Scout Ahead. Strike with Certainty.',
      body: 'Expendable fixed wing scout UAV for forward reconnaissance in GNSS-denied and electronically contested environments.',
      route: '/solutions/pathfinder',
      modelPath: '/assets/DeltaSuicide_v2_3_ASSEM.stl',
      displayState: { positionX: 0, positionY: 10, rotationX: -1.21, rotationY: 0.2, rotationZ: -1.58, scaleValue: 1.6, cameraZ: 180 },
      tags: ['Drone Dominance Program', 'NDAA-Compliant', 'Made in USA'],
      badges: [
        '/assets/badges/NDAA Compliance.png',
        '/assets/badges/made-in-usa.png',
      ],
    },
    {
      name: 'Tuve',
      label: '[ LONG RANGE STRIKE PLATFORM ]',
      tagline: 'Precision Strike at the Edge.',
      body: 'Vertically-launched electrically propelled OWA loitering munition for precision strike at 5 to 20 km in GNSS and RF-denied environments.',
      route: '/solutions/tuve',
      modelPath: '/assets/Tuve_V1_ASSEM.stl',
      displayState: { positionX: 0, positionY: 6, rotationX: 0.11, rotationY: -0.33, rotationZ: 0.46, scaleValue: 1.17, cameraZ: 195 },
      tags: ['Drone Dominance Program', 'NDAA-Compliant', 'Made in USA'],
      badges: [
        '/assets/badges/NDAA Compliance.png',
        '/assets/badges/made-in-usa.png',
      ],
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Solutions | Feather Dynamics',
      description: 'Feather Dynamics UAV solutions — Delta Y4 tactical ISR multirotor and PathFinder expendable scout UAV. NDAA-compliant, Blue UAS Select, Made in USA defense systems.',
      keywords: 'Feather Dynamics solutions, Delta Y4, PathFinder, tactical UAV, scout UAV, expendable drone, multirotor UAS, defense UAS, NDAA compliant, Blue UAS Select, ISR platform, squad portable drone, GNSS-denied, made in USA',
      image: 'https://featherdynamics.com/assets/fdmetapic.jpg',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Feather Dynamics UAV Solutions',
      description: 'Defense-grade UAV solutions engineered for tactical reconnaissance and autonomous ISR.',
      url: 'https://featherdynamics.com/solutions',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@type': 'Product', name: 'Delta Y4', url: 'https://featherdynamics.com/solutions/delta-y4', description: 'Squad-portable tactical ISR multirotor for contested environments.' } },
          { '@type': 'ListItem', position: 2, item: { '@type': 'Product', name: 'PathFinder', url: 'https://featherdynamics.com/solutions/pathfinder', description: 'Expendable fixed wing scout UAV for GNSS-denied forward reconnaissance.' } },
          { '@type': 'ListItem', position: 3, item: { '@type': 'Product', name: 'Tuve', url: 'https://featherdynamics.com/solutions/tuve', description: 'Vertically-launched OWA loitering munition for precision strike at 5 to 20 km in GNSS and RF-denied environments.' } },
        ],
      },
    });
    this.seo.generateBreadcrumbs();
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return;

    // Apply display poses to each model viewer
    this.viewers.toArray().forEach((viewer, i) => {
      Object.assign(viewer.animState, this.products[i].displayState);
    });

    const { gsap }          = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.prod__card', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.18,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.prod__grid', start: 'top 85%' },
    });

    gsap.from('.prod__intro', {
      y: 30, opacity: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.prod__intro', start: 'top 88%' },
    });
  }
}
