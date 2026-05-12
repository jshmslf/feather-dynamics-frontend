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

  private gsapInstance: typeof import('gsap').gsap | null = null;
  private scrollTriggers: import('gsap/ScrollTrigger').ScrollTrigger[] = [];

  private onMouseMove = (e: MouseEvent) => {
    const rect = this.stageRef.nativeElement.getBoundingClientRect();
    this.viewer.mouseLookX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
    this.viewer.mouseLookY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
  };

  specs: Spec[] = [
    { label: 'Endurance',      value: '~16',     unit: 'min'  },
    { label: 'Dash Speed',     value: '25–35',   unit: 'mph'  },
    { label: 'Payload Cap.',   value: '≥0.5',    unit: 'kg'   },
    { label: 'Footprint',      value: '18×18×4', unit: 'in'   },
    { label: 'Unit Cost',      value: '~$3,400', unit: ''     },
    { label: 'Readiness',      value: 'TRL',     unit: '6'    },
  ];

  capabilityMatrix = [
    { requirement: 'CQB Find, Fix & Finish',    capability: 'Optimized for controlled indoor and outdoor maneuvering'           },
    { requirement: 'Mission Range < 2 km',       capability: 'Practical radius 0.5–1.5 km; max operational range under 2 km'    },
    { requirement: 'Indoor + Outdoor Use',       capability: 'Low speed controllability with rapid dash capability'              },
    { requirement: 'Squad / Team Packable',      capability: '~18 × 18 × 4 in portable form factor'                            },
    { requirement: 'Dirty EM Spectrum Ops',      capability: 'Inertial and optical flow navigation primary'                     },
    { requirement: 'GNSS Denial Resilient',      capability: 'GNSS optional with inertial fallback navigation'                  },
    { requirement: 'Payload ≥ 0.5 kg',           capability: 'Payload target 0.5–0.6 kg (1.1–1.3 lb)'                          },
  ];

  technicalSpecs = [
    { param: 'Configuration',          value: 'Delta Y4 Multirotor'                        },
    { param: 'Dimensions (L × W × H)', value: '~18 × 18 × 4 in'                            },
    { param: 'Main Rotors',            value: 'Dual 10 in counter-rotating coaxial'         },
    { param: 'Outer Propulsion',       value: 'Dual 4 in pusher rotors'                    },
    { param: 'Airframe',               value: 'Contact-tolerant wrapped perimeter geometry' },
    { param: 'Empty Weight',           value: '~2.8–3.6 lb (1.27–1.63 kg)'                 },
    { param: 'Battery Weight',         value: '~1.0–1.5 lb (0.45–0.68 kg)'                 },
    { param: 'Payload Capacity',       value: '≥ 0.5 kg (1.1–1.5 lb target)'               },
    { param: 'Max Takeoff Weight',     value: '~5.0–6.5 lb'                                 },
    { param: 'Endurance (No Payload)', value: '~15–20 min'                                  },
    { param: 'Endurance (Payload)',    value: 'Up to ~16 min'                               },
    { param: 'Mission Radius',         value: '~0.5–1.5 km  |  RFS < 2 km'                 },
    { param: 'Dash Speed',             value: '~25–35 mph'                                  },
    { param: 'Indoor Tactical Speed',  value: '~3–12 mph'                                   },
    { param: 'Control Modes',          value: 'Manual Assisted / Stabilized / Semi-Autonomous' },
    { param: 'Navigation',             value: 'GNSS Optional / Inertial / Optical Flow / Visual Ref.' },
    { param: 'Sensor Coverage',        value: 'Forward + rear housings — near 360°'         },
    { param: 'Lighting',               value: 'Day / Low Light / Night capable'             },
    { param: 'Cost Target',            value: '~$3,400 excl. payloads & effects'            },
  ];

  productionItems = [
    'NDAA-oriented component sourcing',
    'Domestic supplier integration',
    'Vertically integrated manufacturing expansion',
    'Low rate production scalability',
    'Modular subsystem architecture for rapid field maintenance',
    'Production-representative prototype maturation',
  ];

  features: Feature[] = [
    { index: '01', title: 'Contact-Tolerant Airframe', tag: 'CQB Design'      },
    { index: '02', title: 'GNSS-Denied Navigation',    tag: 'Resilience'      },
    { index: '03', title: 'Dual-Domain Agility',       tag: 'Indoor/Outdoor'  },
    { index: '04', title: 'Near-360° Sensor Coverage', tag: 'Situational Awr' },
    { index: '05', title: 'Squad-Portable Form Factor', tag: 'Mobility'       },
    { index: '06', title: 'Modular Payload Interface', tag: 'EO / IR / ISR'   },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Delta Y4 Tactical UAV | Feather Dynamics',
      description: 'The Delta Y4 is a compact multirotor tactical UAS engineered for CQB Find, Fix, and Finish missions in contested environments. GNSS-denied resilient, contact-tolerant, and squad-portable.',
      keywords: 'Delta Y4, tactical UAV, CQB UAS, close quarters drone, GNSS denied, Feather Dynamics, Area B RFS, Drone Dominance, S2MARTS, indoor drone, tactical reconnaissance',
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

  private async initGsapTimeline() {
    const { gsap }          = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);
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
    gsap.set(specs,    { y: 60,  opacity: 0 });
    gsap.set(features, { x: -80, opacity: 0 });
    gsap.set(origin,   { x: 60,  yPercent: -50, opacity: 0 });
    gsap.set(hudFill,  { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(bgText,   { x: 0, opacity: 1 });

    // ── Main scroll-scrubbed timeline ──────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scroll,
        pin: stage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          gsap.set(hudFill, { scaleX: self.progress });
        },
      },
    });

    // ── Background text — slides with scroll phases ────────────────────────
    tl.to(bgText, { x: -140, opacity: 0.25, duration: 1 }, 0)
      .to(bgText, { x:   80, opacity: 0.18, duration: 1 }, 1)
      .to(bgText, { x:  200, opacity: 0.12, duration: 1 }, 2)
      .to(bgText, { x:    0, opacity: 0.65, duration: 0.7 }, 3.3);

    // ── Phase 1 (0–1): P1→P2  model swings left · Intro slides in ──────────
    // P2: rx=-0.99 ry=0 rz=1.26 px=-43 py=10 scale=1.0 camZ=220
    tl.to(state, { positionX: -43, positionY: 10, rotationX: -0.99, rotationY: 0, rotationZ: 1.26, scaleValue: 1.0,  cameraZ: 220, duration: 1 }, 0)
      .to(intro, { x: 0, opacity: 1, duration: 0.4 }, 0.15)
      .to(intro, { opacity: 0, x: -30, duration: 0.3 }, 0.7);

    // ── Phase 2 (1–2): P2→P3  model centers & scales up · Specs slide up ───
    // P3: rx=-1.12 ry=0 rz=0 px=0 py=20 scale=1.13 camZ=220
    tl.to(state, { positionX: 0,   positionY: 20, rotationX: -1.12, rotationY: 0,     rotationZ: 0,    scaleValue: 1.13, cameraZ: 220, duration: 1 }, 1)
      .to(specs, { y: 0, opacity: 1, duration: 0.4 }, 1.2)
      .to(specs, { opacity: 0, y: -20, duration: 0.3 }, 1.7);

    // ── Phase 3 (2–3): P3→P4  model swings right · Features slide in ───────
    // P4: rx=-0.43 ry=-0.07 rz=-1.57 px=30 py=10 scale=0.94 camZ=210
    tl.to(state, { positionX: 30,  positionY: 10, rotationX: -0.43, rotationY: -0.07, rotationZ: -1.57, scaleValue: 0.94, cameraZ: 210, duration: 1 }, 2)
      .to(features, { x: 0, opacity: 1, duration: 0.4 }, 2.2)
      .to(features, { opacity: 0, x: 40, duration: 0.3 }, 2.7);

    // ── Phase 4 (3–4): P4→P5  model swings left · Origin slides in from right ─
    // P5: rx=-1.0 ry=0.15 rz=1.57 px=-38 py=20 scale=0.91 camZ=210
    tl.to(state, { positionX: -48, positionY: 10, rotationX: -1.0,  rotationY: 0.15,  rotationZ: 1.57,  scaleValue: 0.91, cameraZ: 210, duration: 1 }, 3)
      .to(origin, { x: 0, opacity: 1, duration: 0.5 }, 3.3);

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

    // Stagger capability matrix rows
    gsap.from('.dy4-summary__matrix-row', {
      y: 24, opacity: 0, duration: 0.5, stagger: 0.07, ease,
      scrollTrigger: { trigger: '.dy4-summary__matrix', start: 'top 88%' },
    });

    // Stagger spec rows
    gsap.from('.dy4-summary__spec-row', {
      y: 18, opacity: 0, duration: 0.4, stagger: 0.035, ease,
      scrollTrigger: { trigger: '.dy4-summary__specs-table', start: 'top 88%' },
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
