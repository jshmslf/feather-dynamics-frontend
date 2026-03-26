import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isSticky = false;
  isHidden = false;
  isMenuOpen = false;

  private isBrowser: boolean;
  private lastScrollY = 0;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;

    const currentScroll = window.scrollY;

    this.isSticky = currentScroll > 0;
    this.isHidden = currentScroll > this.lastScrollY && currentScroll > 80;
    this.lastScrollY = currentScroll;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}