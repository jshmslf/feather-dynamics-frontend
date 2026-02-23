import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsItem, NewsService } from '../../core/services/news.service';

const STORAGE_KEY = 'fd_news_bar_last_dismissed';
const EXPIRY_HOURS = 12; // change to 24 if you want 1 day

@Component({
  selector: 'app-news-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './news-bar.html',
  styleUrl: './news-bar.scss'
})
export class NewsBar implements OnInit {

  item: NewsItem | undefined;
  visible = false;

  constructor(
    private newsService: NewsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const all = this.newsService.getAll();
    if (!all.length) return;

    const latest = all.sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )[0];

    this.item = latest;

    // Check expiry
    const lastDismissed = localStorage.getItem(STORAGE_KEY);

    if (lastDismissed) {
      const diff = Date.now() - Number(lastDismissed);
      const hoursPassed = diff / (1000 * 60 * 60);

      if (hoursPassed < EXPIRY_HOURS) {
        return; // do NOT show yet
      }
    }

    setTimeout(() => {
      this.visible = true;
    }, 1800);
  }

  dismiss(): void {
    this.visible = false;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
  }
}