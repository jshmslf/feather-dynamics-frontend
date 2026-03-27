import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';
import { NewsCategory, NewsItem, NewsService } from '../../core/services/news.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [PageHeader, CommonModule, RouterModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News implements AfterViewInit, OnInit {

  private newsService = inject(NewsService);
  private cdr = inject(ChangeDetectorRef);

  @ViewChildren('newsCard') newsCards!: QueryList<ElementRef>;
  @ViewChild('newsSidebar') newsSidebar!: ElementRef;

  news: NewsItem[] = [];
  filteredNews: NewsItem[] = [];

  categories: NewsCategory[] = ['article', 'announcement'];
  recentNews: NewsItem[] = [];
  tags: string[] = ['UAV', 'Defense', 'AI', 'Aerial'];

  searchTerm = '';
  activeCategory: NewsCategory | null = null;
  resultCount: number = 0;

  private observer!: IntersectionObserver;
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private seo: SeoService) {
    this.news         = this.newsService.getAll();
    this.filteredNews = [...this.news];
    this.recentNews   = this.news.slice(0, 5);
    this.resultCount  = this.filteredNews.length;
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'News | Feathery Dynamics',
      description: 'Stay updated on the latest breakthroughs from Feather Dynamics. From pioneering autonomous vehicle design to mission-critical defense technology, explore our recent news, project milestones, and three decades of innovation in unmanned systems.',
      keywords: 'Feather Dynamics news, autonomous technology updates, unmanned systems breakthroughs, UAV industry milestones, defense technology press releases, next-gen autonomous vehicle launches, aerospace innovation news, mission-driven development updates, autonomous system flight tests, AI-driven defense solutions, physical AI integration, loyal wingman technology, edge computing resilience, multi-domain autonomous platforms, robotics engineering news, unmanned vehicle safety standards, strategic defense partnerships, autonomous ISR news, UAS pilot programs, drone-as-a-service (DaaS) expansion, 30 years of autonomous excellence.'
    })
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

    setTimeout(() => this.observeAll(), 100);

    // Re-observe whenever the card list changes (filter/search causes re-render)
    this.newsCards.changes.subscribe(() => {
      setTimeout(() => this.observeAll(), 50);
    });
  }

  private observeAll(): void {
    this.newsCards?.forEach(card => {
      card.nativeElement.classList.remove('in-view');
      this.observer.observe(card.nativeElement);
    });

    if (this.newsSidebar?.nativeElement) {
      this.observer.observe(this.newsSidebar.nativeElement);
    }
  }

  onSearch(value: string): void {
    this.searchTerm = value;

    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.applyFilters();
    }, 250);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  filterByCategory(category: NewsCategory): void {
    this.activeCategory = this.activeCategory === category ? null : category;
    this.applyFilters();
  }

  applyFilters(): void {
    const term = this.searchTerm.toLowerCase().trim();

    this.filteredNews = this.news.filter(item => {
      const matchesSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.excerpt.toLowerCase().includes(term);

      const matchesCategory =
        !this.activeCategory || item.category === this.activeCategory;

      return matchesSearch && matchesCategory;
    });

    this.resultCount = this.filteredNews.length;

    this.cdr.detectChanges();
    setTimeout(() => this.observeAll(), 50);
  }

  get isFiltered(): boolean {
    return !!this.searchTerm.trim() || !!this.activeCategory;
  }

  trackBySlug(_: number, item: NewsItem): string {
    return item.slug;
  }
}