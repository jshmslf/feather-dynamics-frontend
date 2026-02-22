import { Component, inject } from '@angular/core';
import { PageHeader } from "../../shared/page-header/page-header";
import { CommonModule } from '@angular/common';
import { NewsItem, NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-news',
  imports: [PageHeader, CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {

  private newsService = inject(NewsService);

  /** Full dataset */
  news: NewsItem[] = [];

  /** Filtered list (used by UI) */
  filteredNews: NewsItem[] = [];

  /** Sidebar data */
  categories: ('news' | 'announcement')[] = ['news', 'announcement'];
  recentNews: NewsItem[] = [];
  tags: string[] = ['UAV', 'Defense', 'AI', 'Aerial'];

  /** Search */
  searchTerm = '';
  activeCategory: 'news' | 'announcement' | null = null;

  constructor() {
    this.news = this.newsService.getAll();
    this.filteredNews = [...this.news];
    this.recentNews = this.news.slice(0, 5);
  }

  /* =====================
     FILTERS
  ===================== */

  onSearch(value: string): void {
    this.searchTerm = value.toLowerCase();
    this.applyFilters();
  }

  filterByCategory(category: 'news' | 'announcement'): void {
    this.activeCategory =
      this.activeCategory === category ? null : category;
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
