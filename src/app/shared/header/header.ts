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

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isSticky = false;
  isHidden = false;
  isMenuOpen = false;

  private isBrowser: boolean;
  private lastScrollY = 0;
  private heroHeight = 0;

  /** desktop breakpoint */
  private readonly DESKTOP_WIDTH = 992;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      setTimeout(() => {
        const hero = document.querySelector('.hero') as HTMLElement;
        if (hero) {
          this.heroHeight = hero.offsetHeight;
        }
      });
    }
  }

  private isDesktop(): boolean {
    return this.isBrowser && window.innerWidth >= this.DESKTOP_WIDTH;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;

    /** ❌ Disable sticky entirely on mobile */
    if (!this.isDesktop()) {
      this.isSticky = false;
      this.isHidden = false;
      this.lastScrollY = window.scrollY;
      return;
    }

    const currentScroll = window.scrollY;

    if (currentScroll === 0) {
      this.isSticky = false;
      this.isHidden = false;
      this.lastScrollY = 0;
      return;
    }

    const shouldBeSticky = currentScroll > this.heroHeight - 100;

    if (!shouldBeSticky) {
      this.isSticky = false;
      this.isHidden = false;
      this.lastScrollY = currentScroll;
      return;
    }

    this.isSticky = true;
    this.isHidden = currentScroll > this.lastScrollY;
    this.lastScrollY = currentScroll;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}