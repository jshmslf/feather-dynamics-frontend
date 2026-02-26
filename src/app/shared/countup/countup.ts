import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID,
  OnInit
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-countup',
  standalone: true,
  template: `<span>{{ ssrValue }}</span>`
})
export class CountupComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() to!: number;
  @Input() from: number = 0;
  @Input() duration: number = 2;
  @Input() delay: number = 0;
  @Input() decimals: number = 0;
  @Input() direction: 'up' | 'down' = 'up';
  @Input() separator: string = '';
  @Input() startWhen: boolean = true;

  @Output() started = new EventEmitter<void>();
  @Output() ended = new EventEmitter<void>();

  /** Rendered server-side so the DOM matches what Angular hydrates */
  ssrValue: string = '';

  private span!: HTMLSpanElement;
  private observer?: IntersectionObserver;
  private animationFrame?: number;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  const finalValue = this.direction === 'down' ? this.from : this.to;

  if (!this.isBrowser) {
    // SSR: set before first change detection
    this.ssrValue = this.formatValue(finalValue);
  } else {
    // Browser: initial value before animation
    const startValue = this.direction === 'down' ? this.to : this.from;
    this.ssrValue = this.formatValue(startValue);
  }
}

ngAfterViewInit(): void {
  if (!this.isBrowser) return;

  this.span = this.el.nativeElement.querySelector('span')!;
  this.initObserver();
}

  private initObserver() {
    if (!('IntersectionObserver' in window)) {
      this.startAnimation();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && this.startWhen) {
          this.startAnimation();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private startAnimation() {
    this.started.emit();

    const startValue = this.direction === 'down' ? this.to : this.from;
    const endValue   = this.direction === 'down' ? this.from : this.to;

    const startTime  = performance.now() + this.delay * 1000;
    const durationMs = this.duration * 1000;

    const animate = (time: number) => {
      if (time < startTime) {
        this.animationFrame = requestAnimationFrame(animate);
        return;
      }

      const linear   = Math.min((time - startTime) / durationMs, 1);
      const progress = 1 - Math.pow(1 - linear, 3); // ease-out cubic

      this.updateSpan(startValue + (endValue - startValue) * progress);

      if (linear < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        this.ended.emit();
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  private updateSpan(value: number): void {
    if (this.span) {
      this.span.textContent = this.formatValue(value);
    }
  }

  private formatValue(value: number): string {
    const dec = this.decimals > 0
      ? this.decimals
      : (this.getDecimalPlaces(this.to) > 0 || this.getDecimalPlaces(this.from) > 0 ? 1 : 0);

    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec
    }).format(value);

    return this.separator
      ? formatted.replace(/,/g, this.separator)
      : formatted;
  }

  private getDecimalPlaces(num: number): number {
    const str = num.toString();
    return str.includes('.') ? str.split('.')[1].length : 0;
  }

  ngOnDestroy(): void {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.observer?.disconnect();
  }
}