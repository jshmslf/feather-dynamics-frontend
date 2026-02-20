import { Component, inject } from '@angular/core';
import { RevealComponent } from "../reveal/reveal";
import { NewsItem, NewsService } from '../../core/services/news.service';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [RevealComponent, RouterModule, CommonModule, DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  private newsService = inject(NewsService);

  news: NewsItem[] = [];

  constructor() {
    this.news = this.newsService.getLatest(3);
  }
}
