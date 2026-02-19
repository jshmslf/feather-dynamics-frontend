import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  inject,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
  computed,
  NgZone
} from '@angular/core';
import { CommonModule, isPlatformBrowser, NgClass, NgTemplateOutlet } from '@angular/common';

export interface LogoItem {
  src?: string;
  alt?: string;
  href?: string;
  title?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  // for custom content, pass a templateRef or label
  label?: string;
}

@Component({
  selector: 'app-logo-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-loop.html',
  styleUrl: './logo-loop.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoLoopComponent implements AfterViewInit, OnDestroy {
  @Input() logos: LogoItem[] = [];
  @Input() speed: number = 120;
  @Input() direction: 'left' | 'right' | 'up' | 'down' = 'left';
  @Input() width: number | string = '100%';
  @Input() logoHeight: number = 28;
  @Input() gap: number = 32;
  @Input() pauseOnHover: boolean = true;
  @Input() hoverSpeed?: number;
  @Input() fadeOut: boolean = false;
  @Input() fadeOutColor?: string;
  @Input() scaleOnHover: boolean = false;
  @Input() ariaLabel: string = 'Partner logos';
  @Input() grayscale: boolean = false;

  @ViewChild('containerRef') containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('trackRef') trackRef!: ElementRef<HTMLDivElement>;
  @ViewChild('seqRef') seqRef!: ElementRef<HTMLUListElement>;

  private platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  copyCount = signal(2);
  isHovered = false;

  private seqWidth = 0;
  private seqHeight = 0;
  private rafId: number | null = null;
  private lastTimestamp: number | null = null;
  private offset = 0;
  private velocity = 0;
  private resizeObserver?: ResizeObserver;

  readonly SMOOTH_TAU = 0.25;

  get isVertical(): boolean {
    return this.direction === 'up' || this.direction === 'down';
  }

  get targetVelocity(): number {
    const magnitude = Math.abs(this.speed);
    const dir = this.isVertical
      ? (this.direction === 'up' ? 1 : -1)
      : (this.direction === 'left' ? 1 : -1);
    return magnitude * dir * (this.speed < 0 ? -1 : 1);
  }

  get effectiveHoverSpeed(): number | undefined {
    if (this.hoverSpeed !== undefined) return this.hoverSpeed;
    if (this.pauseOnHover) return 0;
    return undefined;
  }

  get containerStyle(): Record<string, string> {
    const styles: Record<string, string> = {
      '--logoloop-gap': `${this.gap}px`,
      '--logoloop-logoHeight': `${this.logoHeight}px`,
    };
    if (this.fadeOutColor) styles['--logoloop-fadeColor'] = this.fadeOutColor;
    if (!this.isVertical) styles['width'] = typeof this.width === 'number' ? `${this.width}px` : this.width;
    return styles;
  }

  get copies(): number[] {
    return Array.from({ length: this.copyCount() }, (_, i) => i);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.setupResizeObserver();
      this.waitForImages();
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.resizeObserver?.disconnect();
  }

  onMouseEnter(): void {
    if (this.effectiveHoverSpeed !== undefined) this.isHovered = true;
  }

  onMouseLeave(): void {
    if (this.effectiveHoverSpeed !== undefined) this.isHovered = false;
  }

  private setupResizeObserver(): void {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.updateDimensions());
      if (this.containerRef?.nativeElement) this.resizeObserver.observe(this.containerRef.nativeElement);
      if (this.seqRef?.nativeElement) this.resizeObserver.observe(this.seqRef.nativeElement);
    } else {
      window.addEventListener('resize', () => this.updateDimensions());
    }
    this.updateDimensions();
  }

  private waitForImages(): void {
    const images = this.seqRef?.nativeElement?.querySelectorAll('img') ?? [];
    if (images.length === 0) { this.updateDimensions(); return; }

    let remaining = images.length;
    const onLoad = () => { if (--remaining === 0) this.updateDimensions(); };
    images.forEach((img: HTMLImageElement) => {
      if (img.complete) onLoad();
      else {
        img.addEventListener('load', onLoad, { once: true });
        img.addEventListener('error', onLoad, { once: true });
      }
    });
  }

  private updateDimensions(): void {
    const container = this.containerRef?.nativeElement;
    const seq = this.seqRef?.nativeElement;
    if (!container || !seq) return;

    const rect = seq.getBoundingClientRect();

    if (this.isVertical) {
      const parentHeight = container.parentElement?.clientHeight ?? 0;
      if (parentHeight > 0) container.style.height = `${Math.ceil(parentHeight)}px`;

      const seqH = Math.ceil(rect.height);
      if (seqH > 0) {
        this.seqHeight = seqH;
        const viewport = container.clientHeight || parentHeight || seqH;
        const copies = Math.max(2, Math.ceil(viewport / seqH) + 2);
        this.copyCount.set(copies);
      }
    } else {
      const seqW = Math.ceil(rect.width);
      if (seqW > 0) {
        this.seqWidth = seqW;
        const copies = Math.max(2, Math.ceil(container.clientWidth / seqW) + 2);
        this.copyCount.set(copies);
      }
    }

    this.cdr.markForCheck();

    if (this.rafId === null) this.startAnimation();
  }

  private startAnimation(): void {
    const step = (timestamp: number) => {
      if (this.lastTimestamp === null) this.lastTimestamp = timestamp;
      const dt = Math.max(0, timestamp - this.lastTimestamp) / 1000;
      this.lastTimestamp = timestamp;

      const target = this.isHovered && this.effectiveHoverSpeed !== undefined
        ? this.effectiveHoverSpeed
        : this.targetVelocity;

      const ease = 1 - Math.exp(-dt / this.SMOOTH_TAU);
      this.velocity += (target - this.velocity) * ease;

      const seqSize = this.isVertical ? this.seqHeight : this.seqWidth;
      if (seqSize > 0) {
        let next = this.offset + this.velocity * dt;
        next = ((next % seqSize) + seqSize) % seqSize;
        this.offset = next;

        const transform = this.isVertical
          ? `translate3d(0, ${-next}px, 0)`
          : `translate3d(${-next}px, 0, 0)`;

        if (this.trackRef?.nativeElement) {
          this.trackRef.nativeElement.style.transform = transform;
        }
      }

      this.rafId = requestAnimationFrame(step);
    };

    this.rafId = requestAnimationFrame(step);
  }
}