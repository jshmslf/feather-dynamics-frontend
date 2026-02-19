import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  inject,
  PLATFORM_ID,
  output
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-reveal',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './reveal.scss',
  host: {
    '[style.visibility]': '"hidden"',
    '[style.display]': 'display'
  }
})
export class RevealComponent implements AfterViewInit, OnDestroy {
  // Layout
  @Input() display: string = 'block';
  

  // Movement (AnimatedContent)
  @Input() distance: number = 100;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() reverse: boolean = false;
  @Input() scale: number = 1;

  // Fade (FadeContent)
  @Input() blur: boolean = false;
  @Input() initialOpacity: number = 0;
  @Input() animateOpacity: boolean = true;

  // Timing
  @Input() duration: number = 0.8;
  @Input() ease: string = 'power3.out';
  @Input() delay: number = 0;

  // Scroll
  @Input() threshold: number = 0.1;
  @Input() scroller: string | null = null; // CSS selector string

  // Disappear
  @Input() disappearAfter: number = 0;
  @Input() disappearDuration: number = 0.5;
  @Input() disappearEase: string = 'power3.in';

  // Events
  readonly onComplete = output<void>();
  readonly onDisappearanceComplete = output<void>();

  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);
  private st?: ScrollTrigger;
  private tl?: gsap.core.Timeline;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.el.nativeElement;

    const scrollerTarget: Element | string =
      this.scroller
        ? (document.querySelector(this.scroller) ?? window as any)
        : (document.getElementById('snap-main-container') ?? window as any);

    const axis = this.direction === 'horizontal' ? 'x' : 'y';
    const offset = this.reverse ? -this.distance : this.distance;
    const startPct = (1 - this.threshold) * 100;

    gsap.set(el, {
      [axis]: this.distance !== 0 ? offset : 0,
      scale: this.scale !== 1 ? this.scale : 1,
      opacity: this.animateOpacity ? this.initialOpacity : 1,
      filter: this.blur ? 'blur(10px)' : 'blur(0px)',
      visibility: 'hidden',
      willChange: 'opacity, filter, transform'
    });

    this.tl = gsap.timeline({
      paused: true,
      delay: this.delay,
      onComplete: () => {
        this.onComplete.emit();

        if (this.disappearAfter > 0) {
          gsap.to(el, {
            [axis]: this.reverse ? this.distance : -this.distance,
            scale: this.scale !== 1 ? this.scale : 0.8,
            opacity: this.animateOpacity ? this.initialOpacity : 0,
            filter: this.blur ? 'blur(10px)' : 'blur(0px)',
            delay: this.disappearAfter,
            duration: this.disappearDuration,
            ease: this.disappearEase,
            onComplete: () => this.onDisappearanceComplete.emit()
          });
        }
      }
    });

    this.tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: this.duration,
      ease: this.ease,
      visibility: 'visible'
    });

    this.st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => this.tl?.play()
    });
  }

  ngOnDestroy(): void {
    this.st?.kill();
    this.tl?.kill();
    if (this.el?.nativeElement) {
      gsap.killTweensOf(this.el.nativeElement);
    }
  }
}