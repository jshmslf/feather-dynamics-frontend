import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { TimelineService } from '../../core/services/timeline.service';
import { TimelineItem } from '../../core/model/timeline.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface TimelineGroup {
  year: string;
  items: TimelineItem[];
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('stickySection') stickySection!: ElementRef<HTMLElement>;

  groups: TimelineGroup[] = [];

  activeGroupIndex = 0;
  displayYear = '';
  yearAnimating = false;
  scrollProgress = 0;
  activeItemIndex = 0;

  private scrollListener!: () => void;
  private allItems: TimelineItem[] = [];

  // Must match `top` value in CSS (.tl-sticky { top: 220px })
  private readonly STICKY_TOP_OFFSET = 220;

  constructor(
    private timelineService: TimelineService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    this.allItems = this.timelineService.getItems();
    this.groups = this.groupByYear(this.allItems);
    this.displayYear = this.groups[0]?.year ?? '';
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    });

    this.onScroll();
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.removeEventListener('scroll', this.scrollListener);
  }

  // ─── Grouping ──────────────────────────────────────────────────────────────
  private groupByYear(items: TimelineItem[]): TimelineGroup[] {
    const map = new Map<string, TimelineItem[]>();
    for (const item of items) {
      if (!map.has(item.date)) map.set(item.date, []);
      map.get(item.date)!.push(item);
    }
    return Array.from(map.entries()).map(([year, items]) => ({ year, items }));
  }

  // ─── Core scroll handler ───────────────────────────────────────────────────
  private onScroll(): void {
    const section = this.stickySection.nativeElement;

    const sectionAbsoluteTop =
      section.getBoundingClientRect().top + window.scrollY;

    const stickyPanelH = window.innerHeight - this.STICKY_TOP_OFFSET;
    const scrollableDistance = section.scrollHeight - stickyPanelH;

    const scrolled = window.scrollY - sectionAbsoluteTop;
    const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

    const totalItems = this.allItems.length;
    const rawIndex = progress * (totalItems - 1);
    const newActiveItem = Math.min(Math.floor(rawIndex + 0.5), totalItems - 1);

    // ── Determine which group the active item belongs to ──────────────────
    // The year only advances once we leave the LAST item of the current group.
    // i.e. newGroupIndex = the group that contains newActiveItem.
    const newGroupIndex = this.getGroupIndexForFlatIndex(newActiveItem);

    this.ngZone.run(() => {
      this.scrollProgress = progress;
      this.activeItemIndex = newActiveItem;

      if (newGroupIndex !== this.activeGroupIndex) {
        this.triggerYearTransition(this.groups[newGroupIndex].year);
        this.activeGroupIndex = newGroupIndex;
      }

      this.cdr.detectChanges();
    });
  }

  /**
   * Returns the group index that owns the given flat item index.
   * The year stays on a group until the active item moves PAST the last
   * item of that group (i.e. into the next group's first item).
   */
  private getGroupIndexForFlatIndex(flatIdx: number): number {
    let count = 0;
    for (let i = 0; i < this.groups.length; i++) {
      count += this.groups[i].items.length;
      if (flatIdx < count) {
        return i;
      }
    }
    return this.groups.length - 1;
  }

  // ─── Year transition ───────────────────────────────────────────────────────
  private triggerYearTransition(newYear: string): void {
    this.yearAnimating = true;
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.displayYear = newYear;
      this.cdr.detectChanges();
    }, 180);

    setTimeout(() => {
      this.yearAnimating = false;
      this.cdr.detectChanges();
    }, 220);
  }

  // ─── Template helpers ──────────────────────────────────────────────────────
  isItemActive(groupIdx: number, itemIdx: number): boolean {
    return this.flatIndex(groupIdx, itemIdx) === this.activeItemIndex;
  }

  isItemPast(groupIdx: number, itemIdx: number): boolean {
    return this.flatIndex(groupIdx, itemIdx) < this.activeItemIndex;
  }

  private flatIndex(groupIdx: number, itemIdx: number): number {
    let flat = 0;
    for (let g = 0; g < groupIdx; g++) flat += this.groups[g].items.length;
    return flat + itemIdx;
  }

  get totalItems(): number {
    return this.allItems.length;
  }

  get activeGroup(): TimelineGroup {
    return this.groups[this.activeGroupIndex];
  }

  get stripOffset(): string {
    return `${-this.activeItemIndex * 60}vh`;
  }

  // ─── Dot click → scroll to exact position ─────────────────────────────────
  scrollToItem(groupIdx: number, itemIdx: number): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const flat = this.flatIndex(groupIdx, itemIdx);
    const section = this.stickySection.nativeElement;
    const sectionAbsoluteTop =
      section.getBoundingClientRect().top + window.scrollY;
    const stickyPanelH = window.innerHeight - this.STICKY_TOP_OFFSET;
    const scrollableDistance = section.scrollHeight - stickyPanelH;

    const targetScroll =
      sectionAbsoluteTop +
      (flat / (this.totalItems - 1)) * scrollableDistance;

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }
}