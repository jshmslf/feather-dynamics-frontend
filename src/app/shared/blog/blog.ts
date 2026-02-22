import { AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RevealComponent } from "../reveal/reveal";
import { NewsItem, NewsService } from '../../core/services/news.service';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [RevealComponent, RouterModule, CommonModule, DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements AfterViewInit {
  private newsService = inject(NewsService);
  private platformId = inject(PLATFORM_ID);
  isDraggingActive = false;

  @ViewChild('viewport', { static: false })
  viewport!: ElementRef<HTMLDivElement>;

  news: NewsItem[] = [];

  readonly itemsPerPage = 3;
  currentPage = 0;
  pageCount = 0;
  pages: number[] = [];

  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor() {
    this.news = this.newsService.getAll();
    this.pageCount = Math.ceil(this.news.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.pageCount });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.initDrag();
    this.updateCurrentPage();
  }

    goToPage(index: number): void {
    if (!this.viewport) return;

    const width = this.viewport.nativeElement.clientWidth;
    this.viewport.nativeElement.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });

    this.currentPage = index;
  }

  private updateCurrentPage(): void {
    this.viewport.nativeElement.addEventListener('scroll', () => {
      const width = this.viewport.nativeElement.clientWidth;
      this.currentPage = Math.round(
        this.viewport.nativeElement.scrollLeft / width
      );
    });
  }

  private initDrag(): void {
    const el = this.viewport.nativeElement;

    el.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.startX = e.pageX - el.offsetLeft;
      this.scrollLeft = el.scrollLeft;
      this.isDraggingActive = false;
    });

    el.addEventListener('mouseleave', () => {
      this.isDragging = false;
    });

    el.addEventListener('mouseup', () => {
      this.isDragging = false;
      setTimeout(() => (this.isDraggingActive = false), 0);
    });

    el.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      e.preventDefault();
      this.isDraggingActive = true;

      const x = e.pageX - el.offsetLeft;
      const walk = (x - this.startX) * 1.2;
      el.scrollLeft = this.scrollLeft - walk;
    });
  }
}
