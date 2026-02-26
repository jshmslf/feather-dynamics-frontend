import { Injectable } from '@angular/core';

export type NewsCategory = 'announcement' | 'article';

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
            slug: 'feather-dynamics-joins-darpa-lift-2026',
            excerpt: 'Exploring next-generation aerial intelligence systems.',
            content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
            image: '/assets/news/news-1.png',
            publishedAt: new Date('2026-02-19'),
            category: 'article'
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
