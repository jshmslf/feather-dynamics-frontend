import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnInit,
  inject,
  PLATFORM_ID,
  signal,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-blur-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blur-text.html',
  styleUrls: ['./blur-text.scss']
})
export class BlurText implements OnInit, AfterViewInit, OnDestroy {
  @Input() text = '';
  @Input() delay = 200;
  @Input() animateBy: 'words' | 'letters' = 'words';
  @Input() direction: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() stepDuration = 0.35;
  @Input() easing = 'ease-out';
  @Input() customClass = '';

  @Output() animationDone = new EventEmitter<void>();

  spans: string[] = [];
  private observer?: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  inView = signal(false);

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // populate spans array BEFORE template rendering
    this.spans = this.animateBy === 'words' ? this.text.split(' ') : this.text.split('');
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView.set(true);
          this.observer?.disconnect();
          this.animateSpans();
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) this.observer?.disconnect();
  }

  private getTransformValues() {
    switch (this.direction) {
      case 'top':
        return { start: 'translateY(-50px)', mid: 'translateY(5px)', end: 'translateY(0)' };
      case 'bottom':
        return { start: 'translateY(50px)', mid: 'translateY(-5px)', end: 'translateY(0)' };
      case 'left':
        return { start: 'translateX(-50px)', mid: 'translateX(5px)', end: 'translateX(0)' };
      case 'right':
        return { start: 'translateX(50px)', mid: 'translateX(-5px)', end: 'translateX(0)' };
      default:
        return { start: 'translateY(-50px)', mid: 'translateY(5px)', end: 'translateY(0)' };
    }
  }

  private animateSpans() {
    if (!this.isBrowser) return;

    const children = this.el.nativeElement.querySelectorAll('span');
    const transforms = this.getTransformValues();

    children.forEach((span, index) => {
      const delayMs = index * this.delay;

      const animation = span.animate(
        [
          { filter: 'blur(10px)', opacity: 0, transform: transforms.start },
          { filter: 'blur(5px)', opacity: 0.5, transform: transforms.mid },
          { filter: 'blur(0px)', opacity: 1, transform: transforms.end }
        ],
        {
          duration: this.stepDuration * 1000 * 2,
          easing: this.easing,
          delay: delayMs,
          fill: 'forwards'
        }
      );

      // emit animation done for the last letter
      if (index === children.length - 1) {
        animation.onfinish = () => this.animationDone.emit();
      }
    });
  }
}