import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.scss'
})
export class ScrollTopComponent {

  visible = signal(false);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.isBrowser) return;

    const offset = window.scrollY || document.documentElement.scrollTop;
    this.visible.set(offset > 400);
  }

  scrollToTop() {
    if (!this.isBrowser) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}