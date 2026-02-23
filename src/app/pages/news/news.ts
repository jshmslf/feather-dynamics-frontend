import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  inject
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';
import { NewsItem, NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [PageHeader, CommonModule, RouterModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News implements AfterViewInit {

  private newsService = inject(NewsService);

  @ViewChildren('newsCard') newsCards!: QueryList<ElementRef>;
  @ViewChild('newsSidebar') newsSidebar!: ElementRef;

  news: NewsItem[] = [];
  filteredNews: NewsItem[] = [];

  categories: ('news' | 'announcement')[] = ['news', 'announcement'];
  recentNews: NewsItem[] = [];
  tags: string[] = ['UAV', 'Defense', 'AI', 'Aerial'];

  searchTerm = '';
  activeCategory: 'news' | 'announcement' | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.news         = this.newsService.getAll();
    this.filteredNews = [...this.news];
    this.recentNews   = this.news.slice(0, 5);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

      // Observe each card with staggered delay via CSS nth-child
      this.newsCards?.forEach(card => {
        observer.observe(card.nativeElement);
      });

      // Observe sidebar
      if (this.newsSidebar?.nativeElement) {
        observer.observe(this.newsSidebar.nativeElement);
      }
    }, 100);
  }

  onSearch(value: string): void {
    this.searchTerm = value.toLowerCase();
    this.applyFilters();
  }

  filterByCategory(category: 'news' | 'announcement'): void {
    this.activeCategory = this.activeCategory === category ? null : category;
    this.applyFilters();
  }

  private applyFilters(): void {
    this.filteredNews = this.news.filter(item => {
      const matchesSearch =
        item.title.toLowerCase().includes(this.searchTerm) ||
        item.excerpt.toLowerCase().includes(this.searchTerm);

      const matchesCategory =
        !this.activeCategory || item.category === this.activeCategory;

      return matchesSearch && matchesCategory;
    });
  }
}