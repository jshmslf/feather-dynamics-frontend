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
import { LucideAngularModule, Rocket, Zap, Eye, BrainCircuit, Crosshair, Radio } from 'lucide-angular';

interface Spec {
  label: string;
  value: string;
  unit: string;
}

interface Feature {
  index: string;
  title: string;
  tag: string;
  icon: string;
}

@Component({
  selector: 'app-tuve',
  standalone: true,
  imports: [CommonModule, PageHeader, Cta, ModelViewer, LucideAngularModule],
  templateUrl: './tuve.html',
  styleUrl: './tuve.scss',
})
export class Tuve implements OnInit, AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private seo = inject(SeoService);

  @ViewChild('scrollSection') scrollSectionRef!: ElementRef<HTMLElement>;
  @ViewChild('stage')         stageRef!:         ElementRef<HTMLElement>;
  @ViewChild(ModelViewer)     viewer!:            ModelViewer;
  @ViewChild('panelIntro')    panelIntroRef!:     ElementRef<HTMLElement>;
  @ViewChild('panelSpecs')    panelSpecsRef!:     ElementRef<HTMLElement>;
  @ViewChild('panelFeatures') panelFeaturesRef!:  ElementRef<HTMLElement>;
  @ViewChild('panelOrigin')   panelOriginRef!:    ElementRef<HTMLElement>;
  @ViewChild('hudFill')       hudFillRef!:        ElementRef<HTMLElement>;
  @ViewChild('bgText')        bgTextRef!:         ElementRef<HTMLElement>;

  private readonly snapFractions = [0, 0.21, 0.47, 0.74, 1.0];
  private readonly snapPoints    = [0, 0.8,  1.8,  2.8,  3.8];

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
    { label: 'Range',      value: '5–20', unit: 'km'  },
    { label: 'Endurance',  value: '45',   unit: 'min' },
    { label: 'Payload',    value: '2.5',  unit: 'kg'  },
    { label: 'Weight',     value: '4.5',  unit: 'kg'  },
  ];

  platformHighlights = [
    {
      icon: '◈',
      title: 'Vertical Launch',
      body: 'Hand or ground launch with no tube, rail, or catapult. Operational within minutes from squad or platoon level.',
    },
    {
      icon: '◎',
      title: 'GNSS-Denied Navigation',
      body: 'Dual IMU, optical flow, and AI vision correlation maintain positional accuracy with no satellite input required.',
    },
    {
      icon: '▸',
      title: 'AI-Guided Strike',
      body: 'Onboard neural inference classifies and tracks targets from fused EO/IR feeds, closing kill chains at long range with minimal operator input.',
    },
    {
      icon: '⬡',
      title: 'Modular Payload',
      body: '2.5 kg payload bay supports rapid field integration of ESAD/EMSAD-equipped fire sets and multiple munition vendor pairings.',
    },
  ];

  productionItems = [
    'U.S.-manufactured CR Systems propulsion',
    'NDAA-compliant component sourcing',
    'Domestic supplier integration',
    'Active production facility, Marina CA',
    'DDP Supply Chain Migration compliant',
  ];

  readonly Rocket = Rocket;
  readonly Zap = Zap;
  readonly Eye = Eye;
  readonly BrainCircuit = BrainCircuit;
  readonly Crosshair = Crosshair;
  readonly Radio = Radio;

  features: Feature[] = [
    { index: '01', title: 'Vertical Launch',            tag: 'No Equipment',        icon: 'Rocket'       },
    { index: '02', title: 'CR Contra-Rotating Motor',   tag: 'U.S. Manufactured',   icon: 'Zap'          },
    { index: '03', title: 'Dual EO/IR Seeker',          tag: 'Daylight + Thermal',  icon: 'Eye'          },
    { index: '04', title: 'AI Autonomy Stack',          tag: 'GNSS/RF Denied',      icon: 'BrainCircuit' },
    { index: '05', title: 'Four Articulating Canards',  tag: 'Full 3-Axis Authority', icon: 'Crosshair'  },
    { index: '06', title: 'Multi-Link Command',         tag: 'RF / LTE / Satellite', icon: 'Radio'       },
  ];

  constructor() {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Tuve Strike UAS | Feather Dynamics',
      description: 'The Tuve is a vertically-launched OWA loitering munition for precision strike at 5 to 20 km in GNSS and RF-denied environments. CR Systems propulsion, dual EO/IR, NDAA-compliant.',
      keywords: 'Tuve, OWA loitering munition, one-way attack drone, vertically launched UAS, precision strike, GNSS-denied, RF-denied, contra-rotating motor, EO IR seeker, AI autonomy, Feather Dynamics, NDAA compliant, made in USA, Drone Dominance Program, DDP',
      image: 'https://featherdynamics.com/assets/fdmetapic.jpg',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Tuve',
      description: 'Vertically-launched OWA loitering munition for precision strike at 5 to 20 km in GNSS and RF-denied environments.',
      brand: { '@type': 'Organization', name: 'Feather Dynamics', url: 'https://featherdynamics.com' },
      url: 'https://featherdynamics.com/solutions/tuve',
      category: 'Unmanned Aerial Vehicle',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Range', value: '5–20 km' },
        { '@type': 'PropertyValue', name: 'Compliance', value: 'NDAA-Compliant' },
        { '@type': 'PropertyValue', name: 'Propulsion', value: 'CR Systems Dual-Axis Contra-Rotating Motor' },
      ],
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

  private currentIdx(): number {
    const sectionEl  = this.scrollSectionRef.nativeElement;
    const sectionTop = sectionEl.getBoundingClientRect().top + window.scrollY;
    const totalRange = sectionEl.offsetHeight - window.innerHeight;
    const progress   = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / totalRange));
    return this.snapFractions.reduce((best, f, i) =>
      Math.abs(f - progress) < Math.abs(this.snapFractions[best] - progress) ? i : best, 0);
  }

  onNavNext() {
    if (!this.isBrowser) return;
    const nextIdx = this.currentIdx() + 1;
    if (nextIdx >= this.snapPoints.length) {
      document.querySelector('.tuve-summary')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.smoothSnapTo(this.snapPoints[nextIdx]);
    }
  }

  onNavPrev() {
    if (!this.isBrowser) return;
    const prevIdx = Math.max(this.currentIdx() - 1, 0);
    this.smoothSnapTo(this.snapPoints[prevIdx]);
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

    const scroll    = this.scrollSectionRef.nativeElement;
    const stage     = this.stageRef.nativeElement;
    const intro     = this.panelIntroRef.nativeElement;
    const specs     = this.panelSpecsRef.nativeElement;
    const features  = this.panelFeaturesRef.nativeElement;
    const origin    = this.panelOriginRef.nativeElement;
    const hudFill   = this.hudFillRef.nativeElement;
    const bgText    = this.bgTextRef.nativeElement;
    const state     = this.viewer.animState;

    gsap.set(state, { positionX: 0, positionY: 6, rotationX: 0.11, rotationY: -0.33, rotationZ: 0.46, scaleValue: 1.17, cameraZ: 195 });

    gsap.set(intro,    { x: 80,  opacity: 0 });
    gsap.set(specs,    { y: 60,  xPercent: -50, opacity: 0 });
    gsap.set(features, { x: -80, opacity: 0 });
    gsap.set(origin,   { x: 60,  yPercent: -50, opacity: 0 });
    gsap.set(hudFill,  { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(bgText,   { x: 0, opacity: 1 });

    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: scroll,
        pin: stage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        snap: {
          snapTo: [0, 0.21, 0.47, 0.74, 1.0],
          duration: { min: 0.7, max: 1.2 },
          delay: 0.3,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          gsap.set(hudFill, { scaleX: self.progress });
        },
      },
    });

    this.timeline
      .to(bgText, { x: -140, opacity: 0.25, duration: 0.8 }, 0)
      .to(bgText, { x:   80, opacity: 0.18, duration: 0.8 }, 1)
      .to(bgText, { x:  200, opacity: 0.12, duration: 0.8 }, 2)
      .to(bgText, { x:    0, opacity: 0.65, duration: 0.8 }, 3.0);

    // Phase 2: model arrives at tl=0.65, snap at 0.8, panel in 0.65→0.90
    this.timeline
      .to(state, { positionX: -13, positionY: 6, rotationX: 0.24, rotationY: -0.68, rotationZ: 0.42, scaleValue: 1.52, cameraZ: 200, duration: 0.65, ease: 'power2.out' }, 0)
      .to(intro, { x: 0, opacity: 1, duration: 0.15 }, 0.65)
      .to(intro, { opacity: 0, x: -30, duration: 0.10 }, 0.90);

    // Phase 3: model arrives at tl=1.65, snap at 1.8, panel in 1.65→1.90
    this.timeline
      .to(state, { positionX: -5.32, positionY: 13.04, rotationX: 0.2144, rotationY: 1.43, rotationZ: 1.1815, scaleValue: 1.51, cameraZ: 225.6, duration: 0.65, ease: 'power2.out' }, 1.0)
      .to(specs, { y: 0, opacity: 1, duration: 0.15 }, 1.65)
      .to(specs, { opacity: 0, y: -20, duration: 0.10 }, 1.90);

    // Phase 4: model arrives at tl=2.65, snap at 2.8, panel in 2.65→2.90
    this.timeline
      .to(state, { positionX: 32, positionY: 10, rotationX: 1.39, rotationY: -2.75, rotationZ: 0.07, scaleValue: 1.24, cameraZ: 240, duration: 0.65, ease: 'power2.out' }, 2.0)
      .to(features, { x: 0, opacity: 1, duration: 0.15 }, 2.65)
      .to(features, { opacity: 0, x: 40, duration: 0.10 }, 2.90);

    // Phase 5: model arrives at tl=3.65, holds to tl=3.8 (snap = end of section)
    this.timeline
      .to(state, { positionX: -46, positionY: -2, rotationX: 0.02, rotationY: -0.51, rotationZ: 0.51, scaleValue: 1.07, cameraZ: 175, duration: 0.65, ease: 'power2.out' }, 3.0)
      .to(state, { positionX: -46, positionY: -2, rotationX: 0.02, rotationY: -0.51, rotationZ: 0.51, scaleValue: 1.07, cameraZ: 175, duration: 0.15 }, 3.65)
      .to(origin, { x: 0, opacity: 1, duration: 0.15 }, 3.65);

    this.scrollTriggers.push(ScrollTrigger.getAll().at(-1)!);
  }

  private async initSummaryAnimations() {
    const { gsap }          = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');

    const ease = 'power2.out';

    gsap.from('.tuve-summary__mission', {
      y: 50, opacity: 0, duration: 0.8, ease,
      scrollTrigger: { trigger: '.tuve-summary__mission', start: 'top 88%' },
    });

    document.querySelectorAll<HTMLElement>('.tuve-summary__section').forEach(section => {
      gsap.from(section, {
        y: 40, opacity: 0, duration: 0.7, ease,
        scrollTrigger: { trigger: section, start: 'top 88%' },
      });
    });

    gsap.from('.tuve-summary__card', {
      y: 24, opacity: 0, duration: 0.5, stagger: 0.1, ease,
      scrollTrigger: { trigger: '.tuve-summary__grid', start: 'top 88%' },
    });

    gsap.from('.tuve-summary__stat', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.12, ease,
      scrollTrigger: { trigger: '.tuve-summary__stats', start: 'top 88%' },
    });

    gsap.from('.tuve-summary__prod-item', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.09, ease,
      scrollTrigger: { trigger: '.tuve-summary__prod-list', start: 'top 88%' },
    });

    ScrollTrigger.getAll().forEach(st => {
      if (!this.scrollTriggers.includes(st)) this.scrollTriggers.push(st);
    });
  }
}
