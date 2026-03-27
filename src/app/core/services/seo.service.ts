import { DOCUMENT, Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class SeoService {
    constructor(
        private meta: Meta,
        private title: Title,
        private router: Router,
        @Inject(DOCUMENT) private doc: Document
    ) { }

    updateSeo(config: {
        title: string,
        description: string,
        image?: string,
        type?: string,
        publishedAt?: string,
        author?: string,
        keywords?: string;
    }) {
        const url = `https://featherdynamics.com${this.router.url}`;

        this.title.setTitle(config.title);
        this.setCanonical(url);

        const tags = [
        { name: 'description', content: config.description },
        { name: 'keywords', content: config.keywords || '' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:title', content: config.title },
        { property: 'og:description', content: config.description },
        { property: 'og:url', content: url },
        { property: 'og:type', content: config.type || 'website' },
        { property: 'og:image', content: config.image || 'https://featherdynamics.com/assets/default-og.jpg' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: config.title },
        { name: 'twitter:description', content: config.description },
        { name: 'twitter:image', content: config.image || 'https://featherdynamics.com/assets/default-og.jpg' },
    ];

        // Article-specific tags
        if (config.type === 'article') {
            tags.push(
            { property: 'article:published_time', content: config.publishedAt || '' },
            { property: 'article:author', content: config.author || '' }
            );
        }

        tags.forEach(tag => {
            if ((tag as any).property) {
            this.meta.updateTag({ property: (tag as any).property, content: tag.content });
            } else {
            this.meta.updateTag({ name: tag.name!, content: tag.content });
            }
        });
    }

    setJsonLd(data: object) {
        const existing = this.doc.querySelector('script[type="application/ld+json"]');
        if (existing) existing.remove();

        const script = this.doc.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        this.doc.head.appendChild(script);
    }

    removeJsonLd() {
        const el = this.doc.querySelector('script[type="application/ld+json"]');
        if (el) el.remove();
    }
    
    private setCanonical(url: string) {
        let link: HTMLLinkElement = this.doc.querySelector("link[rel='canonical']")!;
        if (!link) {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }

    // Call on route changes to clean stale tags
    removeArticleTags() {
        ['article:published_time', 'article:author'].forEach(p =>
            this.meta.removeTag(`property='${p}'`)
        );
    }
}