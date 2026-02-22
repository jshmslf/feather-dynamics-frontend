import { Injectable } from '@angular/core';

export type NewsCategory = 'announcement' | 'news';

export interface NewsItem {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    publishedAt: Date;
    category: NewsCategory;
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
            publishedAt: new Date('2026-02-19'),
            category: 'news'
        },
        {
            id: 2,
            title: 'Advancements in UAV Surveillance',
            slug: 'advancements-in-uav-surveillance',
            excerpt: 'Exploring next-generation aerial intelligence systems.',
            content: 'Full article content here...',
            image: '/assets/images/3.jpg',
            publishedAt: new Date('2026-02-15'),
            category: 'announcement'
        },
        {
            id: 2,
            title: 'Advancements in UAV Surveillance',
            slug: 'advancements-in-uav-surveillance',
            excerpt: 'Exploring next-generation aerial intelligence systems.',
            content: 'Full article content here...',
            image: '/assets/images/ril_p3.JPG',
            publishedAt: new Date('2026-02-01'),
            category: 'announcement'
        },
    ];

    constructor() { }

    getAll(): NewsItem[] {
        return [...this.news].sort(
            (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
        );
    }

    getBySlug(slug: string): NewsItem | undefined {
        return this.news.find(n => n.slug === slug);
    }

    getLatest(limit: number = 3): NewsItem[] {
    return this.getAll().slice(0, limit);
    }

    getLatestFour(): NewsItem[] {
        return this.getLatest(4);
    }

    getByCategory(category: NewsCategory): NewsItem[] {
        return this.getAll().filter(n => n.category === category);
    }
}
