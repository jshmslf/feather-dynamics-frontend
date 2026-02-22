import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-scroll-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-reveal.html',
  styleUrl: './scroll-reveal.scss'
})
export class ScrollRevealComponent implements AfterViewInit, OnDestroy {

  @ViewChild('container') containerRef!: ElementRef<HTMLHeadingElement>;

  @Input() text: string = '';
  @Input() enableBlur = true;
  @Input() baseOpacity = 0.1;
  @Input() baseRotation = 3;
  @Input() blurStrength = 4;
  @Input() containerClassName = '';
  @Input() textClassName = '';
  @Input() rotationEnd = 'bottom bottom';
  @Input() wordAnimationEnd = 'bottom bottom';
  @Input() maxWidth: string = '100%';
  @Input() align: 'left' | 'center' = 'left';

  private isBrowser: boolean;
  private triggers: ScrollTrigger[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  get words(): string[] {
    return this.text.split(/(\s+)/);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const el = this.containerRef.nativeElement;
    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    // Rotation animation
    const rotationTween = gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: this.baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: this.rotationEnd,
          scrub: true
        }
      }
    );

    this.triggers.push(rotationTween.scrollTrigger!);

    // Opacity animation
    const opacityTween = gsap.fromTo(
      wordElements,
      { opacity: this.baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=20%',
          end: this.wordAnimationEnd,
          scrub: true
        }
      }
    );

    this.triggers.push(opacityTween.scrollTrigger!);

    // Blur animation (optional)
    if (this.enableBlur) {
      const blurTween = gsap.fromTo(
        wordElements,
        { filter: `blur(${this.blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=20%',
            end: this.wordAnimationEnd,
            scrub: true
          }
        }
      );

      this.triggers.push(blurTween.scrollTrigger!);
    }
  }

  ngOnDestroy(): void {
    this.triggers.forEach(trigger => trigger.kill());
  }
}