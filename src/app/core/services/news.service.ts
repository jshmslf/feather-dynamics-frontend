import { Injectable } from '@angular/core';

export interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    publishedAt: Date;
}

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private news: NewsItem[] = [
        {
            id: 1,
            title: 'Feather Dynamics joins DARPA Lift 2026',
            slug: 'advancements-in-uav-surveillance',
            excerpt: 'Exploring next-generation aerial intelligence systems.',
            content: 'Full article content here...',
            image: '/assets/news/news-1.png',
            publishedAt: new Date('2026-02-19')
        },
        {
            id: 2,
            title: 'Advancements in UAV Surveillance',
            slug: 'advancements-in-uav-surveillance',
            excerpt: 'Exploring next-generation aerial intelligence systems.',
            content: 'Full article content here...',
            image: '/assets/images/3.jpg',
            publishedAt: new Date('2026-02-15')
        },
        {
            id: 2,
            title: 'Advancements in UAV Surveillance',
            slug: 'advancements-in-uav-surveillance',
            excerpt: 'Exploring next-generation aerial intelligence systems.',
            content: 'Full article content here...',
            image: '/assets/images/ril_p3.JPG',
            publishedAt: new Date('2026-02-01')
        },
    ];

    constructor() {}

  /** Get all news sorted by latest */
    getAll(): NewsItem[] {
        return [...this.news].sort(
            (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
        );
    }

  /** Get single news by slug */
    getBySlug(slug: string): NewsItem | undefined {
        return this.news.find(n => n.slug === slug);
    }

  /** Get latest news (default 3 items) */
    getLatest(limit: number = 3): NewsItem[] {
    return this.getAll().slice(0, limit);
    }

  /** Get featured latest (force 4 items for homepage section) */
    getLatestFour(): NewsItem[] {
        return this.getLatest(4);
    }
}
