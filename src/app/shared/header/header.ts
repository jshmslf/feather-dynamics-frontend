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

  private isBrowser: boolean;
  private lastScrollY = 0;
  private heroHeight = 0;

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser) return;

    const currentScroll = window.scrollY;

    this.isSticky = currentScroll > this.heroHeight - 100;

    if (this.isSticky) {
      if (currentScroll > this.lastScrollY) {
        this.isHidden = false;
      } else {
        this.isHidden = true;
      }
    } else {
      this.isHidden = false;
    }

    this.lastScrollY = currentScroll;
  }
}
