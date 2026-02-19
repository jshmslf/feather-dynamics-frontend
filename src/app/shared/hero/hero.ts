import { Component, ElementRef, PLATFORM_ID, ViewChild, AfterViewInit, Inject, OnDestroy, QueryList, HostListener, ViewChildren } from '@angular/core';
import { BlurText } from "../blur-text/blur-text";
import { isPlatformBrowser } from '@angular/common';
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-hero',
  imports: [BlurText, RevealComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  private isBrowser: boolean;
  private ticking = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Parallax
  handleScroll = () => {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateParallax();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

  updateParallax() {
    const scrollY = window.scrollY;
    const speed = 0.35;
    const offset = scrollY * speed;

    if (this.videoRef) {
      this.videoRef.nativeElement.style.transform =
        `translate(-50%, calc(-50% + ${offset}px))`
    }
  }
}