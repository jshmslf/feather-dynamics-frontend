import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

declare let dataLayer: any[];

@Injectable({ providedIn: 'root' })
export class GtmService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    push(event: object): void {
        if (isPlatformBrowser(this.platformId) && typeof dataLayer !== 'undefined') {
            dataLayer.push(event);
        }
    }

    trackPageView(url: string, title: string): void {
        this.push({
            event: 'page_view',
            page_path: url,
            page_title: title,
        });
    }

    trackEvent(eventName: string, params?: object): void {
        this.push({
            event: eventName,
            ...params
        });
    }
}