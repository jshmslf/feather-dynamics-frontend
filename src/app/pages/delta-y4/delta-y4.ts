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
  selector: 'app-delta-y4',
  standalone: true,
  imports: [CommonModule, PageHeader, Cta, ModelViewer],
  templateUrl: './delta-y4.html',
  styleUrl: './delta-y4.scss',
})
export class DeltaY4 implements OnInit, AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  @ViewChild('scrollSection') scrollSectionRef!: ElementRef<HTMLElement>;
  @ViewChild('stage')         stageRef!:         ElementRef<HTMLElement>;
  @ViewChild(ModelViewer)     viewer!:            ModelViewer;
  @ViewChild('panelIntro')    panelIntroRef!:     ElementRef<HTMLElement>;
  @ViewChild('panelSpecs')    panelSpecsRef!:     ElementRef<HTMLElement>;
  @ViewChild('panelFeatures') panelFeaturesRef!:  ElementRef<HTMLElement>;
  @ViewChild('panelOrigin')   panelOriginRef!:    ElementRef<HTMLElement>;
  @ViewChild('hudFill')       hudFillRef!:        ElementRef<HTMLElement>;
  @ViewChild('bgText')        bgTextRef!:         ElementRef<HTMLElement>;
  private scrollProgress = 0;
  // timeline positions (0–5) centered in each panel's visibility window
  // Phase 4 has duration 2 (tl 3–5) for extended Production & Readiness scroll
  private readonly snapPoints = [0, 0.6, 1.6, 2.5, 5.0];

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
    { label: 'Endurance',    value: '~16',     unit: 'min' },
    { label: 'Dash Speed',   value: '25–35',   unit: 'mph' },
    { label: 'Payload Cap.', value: '≥0.5',    unit: 'kg'  },
    { label: 'Footprint',    value: '18×18×4', unit: 'in'  },
    { label: 'Readiness',    value: 'TRL',     unit: '6'   },
  ];

  platformHighlights = [
    {
      icon: '◈',
      title: 'Contact-Tolerant',
      body: 'Wrapped airframe geometry protects all propulsion units, supporting controlled maneuvering in confined and obstacle-dense environments.',
    },
    {
      icon: '◎',
      title: 'Navigation Resilient',
      body: 'Designed to operate in GPS-contested and electronically degraded environments with inertial fallback navigation.',
    },
    {
      icon: '▸',
      title: 'Squad-Portable',
      body: 'Compact form factor designed for rapid deployment and transport by small teams without dedicated ground support.',
    },
    {
      icon: '⬡',
      title: 'Modular Payload',
      body: 'Interchangeable payload interface supports EO, IR, and ISR sensor configurations adaptable to mission requirements.',
    },
  ];

  productionItems = [
    'NDAA-oriented component sourcing',
    'Domestic supplier integration',
    'Vertically integrated manufacturing',
    'Low rate production scalability',
    'Modular subsystem architecture',
    'Production-representative prototype maturation',
  ];

  features: Feature[] = [
    { index: '01', title: 'Contact-Tolerant Airframe',        tag: 'Tactical'       },
    { index: '02', title: 'Degraded-Environment Navigation',   tag: 'Nav Resilient'  },
    { index: '03', title: 'Dual-Domain Agility',               tag: 'Indoor/Outdoor' },
    { index: '04', title: 'Near-360° Sensor Coverage',         tag: 'Awareness'      },
    { index: '05', title: 'Squad-Portable Form Factor',        tag: 'Mobility'       },
    { index: '06', title: 'Modular Payload Interface',         tag: 'EO / IR / ISR'  },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Delta Y4 Tactical UAV | Feather Dynamics',
      description: 'The Delta Y4 is a compact multirotor UAS engineered for indoor and outdoor tactical reconnaissance in obstacle-dense and GPS-contested environments. Contact-tolerant, squad-portable, and modular.',
      keywords: 'Delta Y4, tactical UAV, multirotor UAS, indoor drone, contact-tolerant, Feather Dynamics, defense UAS, NDAA compliant, modular payload drone',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Delta Y4',
      description: 'Next-generation unmanned aerial vehicle by Feather Dynamics.',
      brand: { '@type': 'Organization', name: 'Feather Dynamics', url: 'https://featherdynamics.com' },
      url: 'https://featherdynamics.com/delta-y4',
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
      document.querySelector('.dy4-summary')?.scrollIntoView({ behavior: 'smooth' });
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
    // Trigger spans (500vh − 100vh) = 4 × vh over 5 tl units → tlPos × 0.8 × vh
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
    const { gsap }            = await import('gsap');
    const { ScrollTrigger }   = await import('gsap/ScrollTrigger');
    const { ScrollToPlugin }  = await import('gsap/ScrollToPlugin');
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    this.gsapInstance = gsap;

    const scroll    = this.scrollSectionRef.nativeElement;
    const stage     = this.stageRef.nativeElement;
    const intro     = this.panelIntroRef.nativeElement;
    const specs     = this.panelSpecsRef.nativeElement;
    const features  = this.panelFeaturesRef.nativeElement;
    const origin    = this.panelOriginRef.nativeElement;
    const hudFill   = this.hudFillRef.nativeElement;
    const bgText    = this.bgTextRef.nativeElement;
    const state     = this.viewer.animState;

    // Set initial panel positions for slide-in effect
    gsap.set(intro,    { x: 80,  opacity: 0 });
    gsap.set(specs,    { y: 60,  xPercent: -50, opacity: 0 });
    gsap.set(features, { x: -80, opacity: 0 });
    gsap.set(origin,   { x: 60,  yPercent: -50, opacity: 0 });
    gsap.set(hudFill,  { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(bgText,   { x: 0, opacity: 1 });

    // ── Main scroll-scrubbed timeline ──────────────────────────────────────
    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scroll,
        pin: stage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        snap: {
          snapTo: [0, 0.14, 0.33, 0.53, 1],
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

    // ── Background text — slides with scroll phases ────────────────────────
    this.timeline.to(bgText, { x: -140, opacity: 0.25, duration: 1 }, 0)
      .to(bgText, { x:   80, opacity: 0.18, duration: 1 }, 1)
      .to(bgText, { x:  200, opacity: 0.12, duration: 1 }, 2)
      .to(bgText, { x:    0, opacity: 0.65, duration: 0.7 }, 3.3);

    // ── Phase 1 (0–1): model swings · Intro visible 0.3–0.7 · snap at 0.5 ───
    this.timeline.to(state, { positionX: -43, positionY: 10, rotationX: -0.99, rotationY: 0, rotationZ: 1.26, scaleValue: 1.0, cameraZ: 220, duration: 1 }, 0)
      .to(intro, { x: 0, opacity: 1, duration: 0.2 }, 0.1)
      .to(intro, { opacity: 0, x: -30, duration: 0.2 }, 0.7);

    // ── Phase 2 (1–2): model centers · Specs visible 1.3–1.7 · snap at 1.5 ─
    this.timeline.to(state, { positionX: 0, positionY: 20, rotationX: -1.12, rotationY: 0, rotationZ: 0, scaleValue: 1.13, cameraZ: 220, duration: 1 }, 1)
      .to(specs, { y: 0, opacity: 1, duration: 0.2 }, 1.1)
      .to(specs, { opacity: 0, y: -20, duration: 0.2 }, 1.7);

    // ── Phase 3 (2–3): model swings right · Features visible 2.3–2.7 · snap at 2.5
    this.timeline.to(state, { positionX: 30, positionY: 10, rotationX: -0.43, rotationY: -0.07, rotationZ: -1.57, scaleValue: 0.94, cameraZ: 210, duration: 1 }, 2)
      .to(features, { x: 0, opacity: 1, duration: 0.2 }, 2.1)
      .to(features, { opacity: 0, x: 40, duration: 0.2 }, 2.7);

    // ── Phase 4 (3–5): model settles slowly · Origin visible 3.3+ · snap at 4.0
    // Duration 2 so Production & Readiness gets extended scroll space (500vh total)
    this.timeline.to(state, { positionX: -48, positionY: 10, rotationX: -1.0, rotationY: 0.15, rotationZ: 1.57, scaleValue: 0.91, cameraZ: 210, duration: 2 }, 3)
      .to(origin, { x: 0, opacity: 1, duration: 0.2 }, 3.1);

    this.scrollTriggers.push(ScrollTrigger.getAll().at(-1)!);
  }

  private async initSummaryAnimations() {
    const { gsap }          = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');

    const ease = 'power2.out';

    // Mission block
    gsap.from('.dy4-summary__mission', {
      y: 50, opacity: 0, duration: 0.8, ease,
      scrollTrigger: { trigger: '.dy4-summary__mission', start: 'top 88%' },
    });

    // Each section header + content block individually
    document.querySelectorAll<HTMLElement>('.dy4-summary__section').forEach(section => {
      gsap.from(section, {
        y: 40, opacity: 0, duration: 0.7, ease,
        scrollTrigger: { trigger: section, start: 'top 88%' },
      });
    });

    // Stagger platform highlight cards
    gsap.from('.dy4-summary__card', {
      y: 24, opacity: 0, duration: 0.5, stagger: 0.1, ease,
      scrollTrigger: { trigger: '.dy4-summary__grid', start: 'top 88%' },
    });

    // Stagger stat values
    gsap.from('.dy4-summary__stat', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.12, ease,
      scrollTrigger: { trigger: '.dy4-summary__stats', start: 'top 88%' },
    });

    // Stagger production bullet items
    gsap.from('.dy4-summary__prod-item', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.09, ease,
      scrollTrigger: { trigger: '.dy4-summary__prod-list', start: 'top 88%' },
    });

    // Production note paragraph
    gsap.from('.dy4-summary__prod-note', {
      y: 30, opacity: 0, duration: 0.7, ease,
      scrollTrigger: { trigger: '.dy4-summary__production', start: 'top 88%' },
    });

    // Collect new triggers for cleanup
    ScrollTrigger.getAll().forEach(st => {
      if (!this.scrollTriggers.includes(st)) this.scrollTriggers.push(st);
    });
  }
}
