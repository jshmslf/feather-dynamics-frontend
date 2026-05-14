import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PageHeader } from '../../shared/page-header/page-header';
import { Cta } from '../../shared/cta/cta';
import { ModelViewer } from '../../shared/model-viewer/model-viewer';
import { SeoService } from '../../core/services/seo.service';

interface Spec {
  label: string;
  value: string;
  unit: string;
}

interface Feature {
  index: string;
  title: string;
  tag: string;
}

@Component({
  selector: 'app-pathfinder',
  standalone: true,
  imports: [CommonModule, PageHeader, Cta, ModelViewer],
  templateUrl: './pathfinder.html',
  styleUrl: './pathfinder.scss',
})
export class PathFinder implements OnInit, AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  @ViewChild('scrollSection') scrollSectionRef!: ElementRef<HTMLElement>;
  @ViewChild('stage')         stageRef!:         ElementRef<HTMLElement>;
  @ViewChild(ModelViewer)     viewer!:            ModelViewer;
  @ViewChild('panelIntro')    panelIntroRef!:     ElementRef<HTMLElement>;
  @ViewChild('panelSpecs')    panelSpecsRef!:     ElementRef<HTMLElement>;
  @ViewChild('panelCaps')     panelCapsRef!:      ElementRef<HTMLElement>;
  @ViewChild('panelReady')    panelReadyRef!:     ElementRef<HTMLElement>;
  @ViewChild('hudFill')       hudFillRef!:        ElementRef<HTMLElement>;
  @ViewChild('bgText')        bgTextRef!:         ElementRef<HTMLElement>;

  private scrollProgress = 0;
  // 4 phases: snap to center of each panel's visibility window
  private readonly snapPoints = [0, 0.6, 1.5, 2.4, 5.0];

  private gsapInstance: typeof import('gsap').gsap | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private timeline: any = null;
  private scrollTriggers: import('gsap/ScrollTrigger').ScrollTrigger[] = [];

  private onMouseMove = (e: MouseEvent) => {
    const rect = this.stageRef.nativeElement.getBoundingClientRect();
    this.viewer.mouseLookX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    this.viewer.mouseLookY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
  };

  specs: Spec[] = [
    { label: 'Cruise Speed', value: '100', unit: 'kts' },
    { label: 'Range',        value: '550', unit: 'nm'  },
    { label: 'Payload',      value: '80',  unit: 'lbs' },
  ];

  platformHighlights = [
    {
      icon: '◈',
      title: 'Forward Scout',
      body: 'Flies ahead of mission aircraft to collect current route intelligence before platforms commit to terminal engagement in contested environments.',
    },
    {
      icon: '◎',
      title: 'GNSS-Denied Operation',
      body: 'Designed from the ground up to operate in denied and degraded navigation environments without dependence on satellite positioning.',
    },
    {
      icon: '▸',
      title: 'Attritable Design',
      body: 'Expendable airframe enables loss-tolerant operational deployment without recovery planning burden.',
    },
    {
      icon: '⬡',
      title: 'Modular Payload',
      body: 'MOSA-compliant payload bay supports rapid integration of sensors and effectors without airframe modification.',
    },
  ];

  features: Feature[] = [
    { index: '01', title: 'Forward Mission Scouting',   tag: 'Scout'       },
    { index: '02', title: 'GNSS-Denied Operation',      tag: 'Navigation'  },
    { index: '03', title: 'Expendable Design',          tag: 'Attritable'  },
    { index: '04', title: 'Modular Payload Bay',        tag: 'MOSA'        },
    { index: '05', title: 'Autonomous Operation and Countermeasure Defensive System',       tag: 'AI Autonomy Operation'    },
    { index: '06', title: 'Multi-Link Communications',  tag: 'Resilient'   },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'PathFinder Scout UAV | Feather Dynamics',
      description: 'PathFinder is an expendable fixed wing scout UAV engineered for forward mission scouting in GNSS-denied and electronically contested environments. 100 knots, 550 nm range.',
      keywords: 'PathFinder, expendable UAV, scout UAV, fixed wing drone, GNSS-denied, forward ISR, attritable, Feather Dynamics, defense UAS, NDAA compliant',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'PathFinder',
      description: 'Autonomous long-range UAV platform by Feather Dynamics.',
      brand: { '@type': 'Organization', name: 'Feather Dynamics', url: 'https://featherdynamics.com' },
      url: 'https://featherdynamics.com/platforms/pathfinder',
    });
    this.seo.generateBreadcrumbs();
  }

  async ngAfterViewInit() {
    if (!this.isBrowser) return;
    this.stageRef.nativeElement.addEventListener('mousemove', this.onMouseMove);
    await this.initGsapTimeline();
    await this.initSummaryAnimations();
  }

  ngOnDestroy() {
    this.scrollTriggers.forEach(st => st.kill());
    if (this.isBrowser) {
      this.stageRef.nativeElement.removeEventListener('mousemove', this.onMouseMove);
    }
  }

  onNavNext() {
    if (!this.isBrowser) return;
    const next = this.snapPoints.find(p => p > this.scrollProgress + 0.05);
    if (next !== undefined) {
      this.smoothSnapTo(next);
    } else {
      document.querySelector('.pf-summary')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onNavPrev() {
    if (!this.isBrowser) return;
    const prev = [...this.snapPoints].reverse().find(p => p < this.scrollProgress - 0.05);
    if (prev !== undefined) {
      this.smoothSnapTo(prev);
    }
  }

  private smoothSnapTo(tlPos: number) {
    if (!this.gsapInstance) return;
    const sectionEl = this.scrollSectionRef.nativeElement;
    const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
    const scrollTarget = sectionTop + tlPos * 0.8 * window.innerHeight;
    this.gsapInstance.to(window, {
      scrollTo: { y: scrollTarget, autoKill: false },
      duration: 0.8,
      ease: 'power2.inOut',
      overwrite: true,
    });
  }

  private async initGsapTimeline() {
    const { gsap }           = await import('gsap');
    const { ScrollTrigger }  = await import('gsap/ScrollTrigger');
    const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    this.gsapInstance = gsap;

    const scroll   = this.scrollSectionRef.nativeElement;
    const stage    = this.stageRef.nativeElement;
    const intro    = this.panelIntroRef.nativeElement;
    const specs    = this.panelSpecsRef.nativeElement;
    const caps     = this.panelCapsRef.nativeElement;
    const ready    = this.panelReadyRef.nativeElement;
    const hudFill  = this.hudFillRef.nativeElement;
    const bgText   = this.bgTextRef.nativeElement;
    const state    = this.viewer.animState;

    // Seed model at the tuned starting position
    gsap.set(state, { positionX: -1, positionY: 13, rotationX: -1.21, rotationY: 0, rotationZ: -1.58, scaleValue: 1.26, cameraZ: 195 });

    gsap.set(intro,  { x: 80,  opacity: 0 });
    gsap.set(specs,  { y: 60,  xPercent: -50, opacity: 0 });
    gsap.set(caps,   { x: -80, opacity: 0 });
    gsap.set(ready,  { x: 60,  yPercent: -50, opacity: 0 });
    gsap.set(hudFill, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(bgText,  { x: 0, opacity: 1 });

    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scroll,
        pin: stage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        snap: {
          snapTo: [0, 0.12, 0.33, 0.53, 1],
          duration: { min: 0.3, max: 0.6 },
          delay: 0.05,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          gsap.set(hudFill, { scaleX: self.progress });
          this.scrollProgress = self.progress * 5;
        },
      },
    });

    // Background watermark drift
    this.timeline
      .to(bgText, { x: -140, opacity: 0.25, duration: 1 }, 0)
      .to(bgText, { x:   80, opacity: 0.18, duration: 1 }, 1)
      .to(bgText, { x:  200, opacity: 0.12, duration: 1 }, 2)
      .to(bgText, { x:    0, opacity: 0.65, duration: 0.7 }, 3.3);

    // Phase 1 (0–1): intro — panel right
    this.timeline
      .to(state, { positionX: -41, positionY: 5, rotationX: -1.30, rotationY: -0.14, rotationZ: -1.80, scaleValue: 1.26, cameraZ: 195, duration: 1 }, 0)
      .to(intro, { x: 0, opacity: 1, duration: 0.2 }, 0.1)
      .to(intro, { opacity: 0, x: -30, duration: 0.2 }, 0.7);

    // Phase 2 (1–2): specs — panel bottom center
    this.timeline
      .to(state, { positionX: 0, positionY: 22, rotationX: -1.28, rotationY: -0.03, rotationZ: -3.13, scaleValue: 1.15, cameraZ: 195, duration: 1 }, 1)
      .to(specs, { y: 0, opacity: 1, duration: 0.2 }, 1.1)
      .to(specs, { opacity: 0, y: -20, duration: 0.2 }, 1.7);

    // Phase 3 (2–3): capabilities — panel left
    this.timeline
      .to(state, { positionX: 26, positionY: 11, rotationX: -0.56, rotationY: 0, rotationZ: -4.74, scaleValue: 1.01, cameraZ: 195, duration: 1 }, 2)
      .to(caps,  { x: 0, opacity: 1, duration: 0.2 }, 2.1)
      .to(caps,  { opacity: 0, x: 40, duration: 0.2 }, 2.7);

    // Phase 4 (3–5, extended duration 2): readiness — panel center-right
    this.timeline
      .to(state, { positionX: -46, positionY: 16, rotationX: -0.86, rotationY: 0.07, rotationZ: -1.74, scaleValue: 1.26, cameraZ: 215, duration: 2 }, 3)
      .to(ready, { x: 0, opacity: 1, duration: 0.2 }, 3.1);

    this.scrollTriggers.push(ScrollTrigger.getAll().at(-1)!);
  }

  private async initSummaryAnimations() {
    const { gsap }          = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');

    const ease = 'power2.out';

    gsap.from('.pf-summary__mission', {
      y: 50, opacity: 0, duration: 0.8, ease,
      scrollTrigger: { trigger: '.pf-summary__mission', start: 'top 88%' },
    });

    document.querySelectorAll<HTMLElement>('.pf-summary__section').forEach(section => {
      gsap.from(section, {
        y: 40, opacity: 0, duration: 0.7, ease,
        scrollTrigger: { trigger: section, start: 'top 88%' },
      });
    });

    gsap.from('.pf-summary__card', {
      y: 24, opacity: 0, duration: 0.5, stagger: 0.1, ease,
      scrollTrigger: { trigger: '.pf-summary__grid', start: 'top 88%' },
    });

    gsap.from('.pf-summary__stat', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.12, ease,
      scrollTrigger: { trigger: '.pf-summary__stats', start: 'top 88%' },
    });

    gsap.from('.pf-summary__prod-item', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.09, ease,
      scrollTrigger: { trigger: '.pf-summary__prod-list', start: 'top 88%' },
    });

    ScrollTrigger.getAll().forEach(st => {
      if (!this.scrollTriggers.includes(st)) this.scrollTriggers.push(st);
    });
  }
}
