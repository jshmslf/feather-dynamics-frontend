import {
  AfterViewInit, Component, ElementRef, Inject, OnDestroy,
  OnInit, PLATFORM_ID, ViewChild
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { NewsItem, NewsService } from '../../core/services/news.service';
import { SeoService } from '../../core/services/seo.service';
import { Cta } from "../../shared/cta/cta";
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe, Cta, MarkdownComponent],
  templateUrl: './news-article.html',
  styleUrl: './news-article.scss'
})
export class NewsArticle implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('heroImg')       heroImg!:        ElementRef;
  @ViewChild('titleBlock')    titleBlock!:     ElementRef;
  @ViewChild('sidebar')       sidebar!:        ElementRef;
  @ViewChild('prose')         prose!:          ElementRef;
  @ViewChild('articleFooter') articleFooter!:  ElementRef;

  article: NewsItem | undefined;
  headings: string[] = [];
  activeHeading = 0;
  copySuccess = false;

  isBrowser: boolean;
  private headingEls: HTMLElement[] = [];
  private revealObserver!: IntersectionObserver;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    const slug     = this.route.snapshot.paramMap.get('slug') ?? '';
    const category = this.route.snapshot.paramMap.get('category') ?? '';
    this.article = this.newsService.getBySlug(slug);

    if (this.article) {
      this.seo.updateSeo({
        title:       `${this.article.title} | Feather Dynamics`,
        description: this.article.excerpt,
        image:       `https://featherdynamics.com${this.article.image}`,
        type:        'article',
        publishedAt: this.article.publishedAt.toISOString(),
        author:      'Feather Dynamics',
        keywords:    'UAV, autonomous cargo, VTOL, logistics, Feather Dynamics'
      });

      this.seo.setJsonLd({
        '@context':         'https://schema.org',
        '@type':            'NewsArticle',
        'headline':         this.article.title,
        'description':      this.article.excerpt,
        'image':            `https://featherdynamics.com${this.article.image}`,
        'datePublished':    this.article.publishedAt.toISOString(),
        'author': {
          '@type': 'Organization',
          'name':  'Feather Dynamics'
        },
        'publisher': {
          '@type': 'Organization',
          'name':  'Feather Dynamics',
          'logo': {
            '@type': 'ImageObject',
            'url':   'https://featherdynamics.com/assets/logo.png'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id':   `https://featherdynamics.com/news/${category}/${slug}`
        }
      });
      
    this.seo.generateBreadcrumbs();
    }
    
  }

  ngOnDestroy(): void {
    this.seo.removeArticleTags();
    this.seo.removeJsonLd();
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    setTimeout(() => {
      this.initReveal();
      this.extractHeadings();
      this.initHeadingTracker();
    }, 80);
  }

  // ── Share actions ─────────────────────────────────────────────
  get currentUrl(): string {
    return this.isBrowser ? window.location.href : '';
  }

  shareLinkedIn(): void {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=500');
  }

  shareTwitter(): void {
    const text = encodeURIComponent(this.article?.title ?? '');
    const url  = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(this.currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  }

  async copyLink(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.currentUrl);
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2200);
    } catch {
      // fallback for older browsers
      const el = document.createElement('textarea');
      el.value = this.currentUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2200);
    }
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

  private extractHeadings(): void {
    if (!this.prose?.nativeElement) return;
    this.headingEls = Array.from(
      this.prose.nativeElement.querySelectorAll('h2, h3')
    ) as HTMLElement[];
    this.headings = this.headingEls.map(h => h.textContent?.trim() ?? '');
    this.headingEls.forEach((h, i) => h.setAttribute('id', `heading-${i}`));
  }

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