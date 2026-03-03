import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { NewsItem, NewsService } from '../../core/services/news.service';
import { Cta } from "../../shared/cta/cta";
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe, Cta, MarkdownComponent],
  templateUrl: './news-article.html',
  styleUrl: './news-article.scss'
})
export class NewsArticle implements OnInit, AfterViewInit {

  @ViewChild('heroImg')      heroImg!:       ElementRef;
  @ViewChild('titleBlock')   titleBlock!:    ElementRef;
  @ViewChild('sidebar')      sidebar!:       ElementRef;
  @ViewChild('prose')        prose!:         ElementRef;
  @ViewChild('articleFooter') articleFooter!: ElementRef;

  article: NewsItem | undefined;
  headings: string[] = [];
  activeHeading = 0;

  isBrowser: boolean;
  private headingEls: HTMLElement[] = [];
  private revealObserver!: IntersectionObserver;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    const slug     = this.route.snapshot.paramMap.get('slug') ?? '';
    this.article   = this.newsService.getBySlug(slug);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    setTimeout(() => {
      this.initReveal();
      this.extractHeadings();
      this.initHeadingTracker();
    }, 80);
  }

  // ── Scroll reveal ─────────────────────────────────────────────
  private initReveal(): void {
    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

    [this.heroImg, this.titleBlock, this.sidebar, this.prose, this.articleFooter]
      .forEach(ref => {
        if (ref?.nativeElement) this.revealObserver.observe(ref.nativeElement);
      });
  }

  // ── TOC: extract h2/h3 from rendered content ──────────────────
  private extractHeadings(): void {
    if (!this.prose?.nativeElement) return;

    this.headingEls = Array.from(
      this.prose.nativeElement.querySelectorAll('h2, h3')
    ) as HTMLElement[];

    this.headings = this.headingEls.map(h => h.textContent?.trim() ?? '');
    this.headingEls.forEach((h, i) => h.setAttribute('id', `heading-${i}`));
  }

  // ── TOC: active highlight on scroll ──────────────────────────
  private initHeadingTracker(): void {
    if (!this.headingEls.length) return;

    const tracker = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = this.headingEls.indexOf(entry.target as HTMLElement);
          if (idx !== -1) this.activeHeading = idx;
        }
      });
    }, { threshold: 1, rootMargin: '-20% 0px -60% 0px' });

    this.headingEls.forEach(h => tracker.observe(h));
  }

  scrollToHeading(index: number): void {
    this.headingEls[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}