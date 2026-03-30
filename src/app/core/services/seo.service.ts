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

    setJsonLd(data: object, id: string = 'default') {
        const existing = this.doc.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
        if (existing) existing.remove();

        const script = this.doc.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-id', id);
        script.text = JSON.stringify(data);
        this.doc.head.appendChild(script);
    }

    removeJsonLd(id: string = 'default') {
        const el = this.doc.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
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

    private getPageName(url: string): string {
        switch (url) {
            case '/who-we-are': return 'About';
            case '/what-we-do': return 'Technology';
            case '/darpa-lift': return 'DARPA Lift';
            case '/news': return 'News';
            case '/contact-us': return 'Contact';
            default: return 'Home';
        }
    }

    generateBreadcrumbs() {
        const url = this.router.url;

        const breadcrumbs: any[] = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://featherdynamics.com"
            }
        ];

        breadcrumbs.push({
            "@type": "ListItem",
            "position": 2,
            "name": this.getPageName(url),
            "item": `https://featherdynamics.com${url}`
        });

        this.setJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs
        }, 'breadcrumb');
    }

    setOrganizationSchema() {
        this.setJsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Feather Dynamics",
            "url": "https://featherdynamics.com",
            "logo": "https://featherdynamics.com/assets/fdmetapic.jpg",
            "description": "Feather Dynamics develops intelligent UAV systems and adaptive flight technologies.",
            "foundingDate": "2025",
            "sameAs": [
                "https://www.linkedin.com/company/feather-dynamics"
            ],
            "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "info@featherdynamics.com"
            }]
        }, 'organization');
    }

    setWebsiteSchema() {
        this.setJsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Feather Dynamics",
            "url": "https://featherdynamics.com"
        }, 'website');
    }
}