import {
  Component,
  AfterViewInit,
  OnDestroy,
  QueryList,
  ViewChildren,
  ElementRef,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PageHeader } from '../../shared/page-header/page-header';
import { Cta } from '../../shared/cta/cta';

export interface TimelineEntry {
  date: string;
  label: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  tag?: string;
}

@Component({
  selector: 'app-darpa',
  imports: [CommonModule, PageHeader, Cta],
  templateUrl: './darpa.html',
  styleUrl: './darpa.scss',
})
export class Darpa implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private observer?: IntersectionObserver;

  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef<HTMLElement>>;

  entries: TimelineEntry[] = [
    {
      date: '2026',
      label: 'Development',
      title: 'Development with CSUMB Mechatronics Department',
      description: 'Active collaboration with the California State University Monterey Bay Mechatronics Department to design, build, and iterate on the platform competing in the DARPA LIFT Challenge.',
      status: 'active',
      tag: 'In Progress',
    },
    {
      date: 'May 2026',
      label: 'Flight Test',
      title: 'First Flight',
      description: 'First full flight of the Feather Dynamics platform developed in collaboration with the CSUMB Mechatronics Department. A critical milestone validating the complete system integration.',
      status: 'upcoming',
      tag: 'Upcoming',
    },
    {
      date: 'August 2026',
      label: 'Challenge Event',
      title: 'DARPA LIFT Challenge Event',
      description: 'Live demonstration and evaluation at the DARPA LIFT Challenge event. Feather Dynamics competes on the national stage with its next-generation unmanned platform.',
      status: 'upcoming',
      tag: 'Target',
    },
  ];

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.timelineItems.forEach((item) => this.observer!.observe(item.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
