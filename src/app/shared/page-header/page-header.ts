import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-page-header',
  imports: [CommonModule, RevealComponent],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  @Input() bgImage = '';
  @Input() title = ''; // manual title input
  breadcrumbs: string[] = [];

  private isBrowser: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (!this.isBrowser) return;

    // Update breadcrumbs automatically on navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumbs();
      });
  }

  private generateBreadcrumbs() {
    const segments: string[] = [];
    let route = this.activatedRoute.root;

    while (route.firstChild) {
      route = route.firstChild;
      if (route.snapshot.url.length > 0) {
        segments.push(route.snapshot.url.map(s => s.path).join('/'));
      }
    }

    // Format breadcrumbs nicely (e.g., 'who-we-are' → 'Who We Are')
    this.breadcrumbs = segments.map(seg => this.formatSegment(seg));
  }

  private formatSegment(segment: string) {
    return segment
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  }
}
