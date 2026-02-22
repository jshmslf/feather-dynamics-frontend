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

  // 1️⃣ At very top → show MAIN header
  if (currentScroll === 0) {
    this.isSticky = false;
    this.isHidden = false; // ✅ important fix
    this.lastScrollY = 0;
    return;
  }

  // 2️⃣ Sticky only after hero
  const shouldBeSticky = currentScroll > this.heroHeight - 100;

  // 3️⃣ If NOT sticky → always show header
  if (!shouldBeSticky) {
    this.isSticky = false;
    this.isHidden = false;
    this.lastScrollY = currentScroll;
    return;
  }

  // 4️⃣ Sticky mode
  this.isSticky = true;

  // scroll DOWN → hide
  if (currentScroll > this.lastScrollY) {
    this.isHidden = true;
  }
  // scroll UP → show
  else {
    this.isHidden = false;
  }

  this.lastScrollY = currentScroll;
}
}
