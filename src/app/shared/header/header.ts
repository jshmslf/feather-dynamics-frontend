import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isSticky = false;
  isWhiteHeader = false;
  
  whiteHeaderRoutes = ['/who-we-are', '/policies', '/', '/what-we-do', '/news'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.activatedRoute;

        // Traverse to the deepest child route
        while (route.firstChild) {
          route = route.firstChild;
        }

        const whiteHeader = route.snapshot.data['whiteHeader'];
        this.isWhiteHeader = !!whiteHeader;
      });
  }
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
