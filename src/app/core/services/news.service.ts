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
            excerpt: 'Team Feather to Compete in the DARPA LIFT Challenge',
            content: `
Feather Dynamics is proud to announce that **Team Feather** will be participating in the prestigious **DARPA LIFT Challenge**, an advanced aerospace competition led by the Defense Advanced Research Projects Agency (DARPA). The LIFT Challenge is designed to accelerate breakthrough innovation in vertical take-off and landing (VTOL) systems and autonomous flight capabilities, technologies that will define the future of mobility, logistics, and national infrastructure.

As a company dedicated to redefining mid-mile logistics through autonomous air cargo solutions, this challenge represents a pivotal opportunity to demonstrate our novel technology on a national stage.

## **Meeting a Critical Industry Need**

The global logistics ecosystem is under unprecedented strain. Workforce shortages, infrastructure limitations, land transport congestion, and rising e-commerce demand are placing immense pressure on warehouse-to-warehouse operations. Despite rapid technological progress in other sectors, mid-mile cargo transport remains constrained by outdated systems and ground-based bottlenecks.

The DARPA LIFT Challenge aligns directly with our mission:

_To provide efficient solutions for air cargo transportation and streamline logistics operations through autonomous aircraft._

Our solution is a long-endurance, heavy-lift autonomous VTOL aircraft capable of efficiently and reliably transporting up to 500 pounds of cargo between warehouses. Designed for multiple missions per day, our aircraft integrates:

- A highly efficient electric propulsion system
- Hybrid-optional power support for extended endurance
- A proprietary ultra-quiet propeller system
- Full-Fuselage Integrated Cargo Bay utilizing 85% of fuselage capacity
- Autonomous flight operations enabling a single trained operator to manage multiple aircraft simultaneously

## **Why the DARPA LIFT Challenge Matters**

DARPA has long been a catalyst for transformative innovation. Programs initiated by DARPA have historically shaped aerospace, defense systems, and advanced mobility technologies. The LIFT Challenge continues that legacy by pushing teams to rethink vertical flight, payload efficiency, endurance, and operational scalability.

For Team Feather Dynamics, this challenge represents:

- Validation of our aircraft architecture and propulsion efficiency
- An opportunity to showcase low-noise VTOL performance (below 50db at 500 meters)
- A platform to demonstrate scalable autonomous logistics solutions
- Alignment with national efforts to strengthen supply chain resilience

Our participation reinforces our commitment to innovation and positions Feather Dynamics among emerging aerospace leaders working to redefine air mobility.

## **A Milestone in Feather Dynamics' Growth**

Since January 2023, our team has been dedicated to solving some of the most pressing challenges facing the cargo transportation industry. Guided by strong leadership, deep engineering expertise, and global strategic experience, Feather Dynamics continues to push the boundaries of what autonomous aerospace systems can accomplish.

Team Feather Dynamics' participation in the DARPA LIFT Challenge signals:

- Technical maturity
- Operational readiness
- Competitive confidence
- A commitment to national and global innovation

## **Taking Logistics to New Heights**

Feather Dynamics approaches innovation with intelligent precision and entrepreneurial boldness. We are building aircraft that are efficient, scalable, quiet, and purpose-built for modern logistics.

The DARPA LIFT Challenge allows us to showcase our capabilities alongside other innovators shaping the future of vertical flight. It reinforces our belief that autonomous air cargo will play a defining role in strengthening supply chains, enabling humanitarian response, and advancing air mobility worldwide.

We are honored to compete.  
And we are committed to advancing the future of autonomous air logistics.
            `,
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
