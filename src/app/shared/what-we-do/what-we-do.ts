import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-what-we-do',
  imports: [CommonModule, RevealComponent],
  templateUrl: './what-we-do.html',
  styleUrl: './what-we-do.scss',
})
export class WhatWeDo implements AfterViewInit {
  @ViewChild('whatSection') whatSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.whatSection.nativeElement);
  }

  items = [
    {
      number: '01',
      title: 'Defence & Security',
      image: '/assets/images/uavmodel.jpg'
    },
    {
      number: '02',
      title: 'Transport & Mobility',
      image: '/assets/images/231.png'
    },
    {
      number: '03',
      title: 'Payloads & Integrated',
      image: '/assets/images/ril_p8.JPG'
    }
  ];

  activeIndex = signal(0);
}
