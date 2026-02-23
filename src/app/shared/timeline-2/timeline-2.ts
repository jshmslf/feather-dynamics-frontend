import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TimelineItem } from '../../core/model/timeline.model';
import { TimelineService } from '../../core/services/timeline.service';

@Component({
  selector: 'app-timeline-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-2.html',
  styleUrl: './timeline-2.scss'
})
export class Timeline2 implements AfterViewInit, OnDestroy {

  @ViewChild('timelineSection') sectionRef!: ElementRef;
  @ViewChild('spineFill')       spineFill!: ElementRef;
  @ViewChildren('timelineItem') itemRefs!: QueryList<ElementRef>;

  items: TimelineItem[] = [];

  isBrowser: boolean;
  private scrollHandler!: () => void;
  private observer!: IntersectionObserver;

  constructor(
    private timelineService: TimelineService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.items = this.timelineService.getItems();
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    setTimeout(() => {
      this.initItemObserver();
      this.initSpineFill();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      if (this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
      if (this.observer) this.observer.disconnect();
    }
  }

  // ── Scroll-driven spine fill ──────────────────────────────────
  private initSpineFill(): void {
    if (!this.spineFill?.nativeElement || !this.sectionRef?.nativeElement) return;

    this.scrollHandler = () => {
      const section = this.sectionRef.nativeElement as HTMLElement;
      const rect    = section.getBoundingClientRect();
      const winH    = window.innerHeight;

      // progress: 0 when top of section hits bottom of viewport
      //           1 when bottom of section hits top of viewport
      const total   = rect.height + winH;
      const elapsed = winH - rect.top;
      const progress = Math.min(1, Math.max(0, elapsed / total));

      this.spineFill.nativeElement.style.height = `${progress * 100}%`;
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    // Run once on init
    this.scrollHandler();
  }

  // ── Item reveal observer ──────────────────────────────────────
  private initItemObserver(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    this.itemRefs?.forEach(ref => {
      if (ref?.nativeElement) this.observer.observe(ref.nativeElement);
    });
  }
}