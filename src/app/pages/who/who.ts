import {
  Component,
  inject,
  PLATFORM_ID,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { PageHeader } from '../../shared/page-header/page-header';
import { BentoImage, BentoService } from '../../core/services/bento.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollRevealComponent } from '../../shared/scroll-reveal/scroll-reveal';
import { Timeline2 } from "../../shared/timeline-2/timeline-2";

@Component({
  selector: 'app-who',
  imports: [PageHeader, CommonModule, ScrollRevealComponent, Timeline2],
  templateUrl: './who.html',
  styleUrl: './who.scss',
})
export class Who implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private bentoService = inject(BentoService);

  @ViewChild('bentoContainer', { static: false })
  bentoContainer!: ElementRef<HTMLElement>;

  images: BentoImage[] = this.bentoService.getImages();
  isBrowser = isPlatformBrowser(this.platformId);

  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const items =
      this.bentoContainer.nativeElement.querySelectorAll<HTMLElement>(
        '.bento__item'
      );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = Number(el.dataset['index'] ?? 0);

            // stagger each item by 60ms based on its index
            setTimeout(() => {
              el.classList.add('is-visible');
            }, index * 60);

            this.observer?.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((item) => this.observer!.observe(item));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}