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
      image: '/assets/drones/fd_drone_2-1.png'
      // image: '/assets/images/uavmodel.jpg'
    },
    {
      number: '02',
      title: 'Transport & Mobility',
      // image: '/assets/images/ril_photo1.jpg'
      image: '/assets/drones/fd_drone_4.png'
    },
    {
      number: '03',
      title: 'Payloads & Integrated',
      // image: '/assets/images/ril_p4.jpg'
      image: '/assets/drones/fd_drone_7.png'
    },
    {
      number: '04',
      title: 'Research & Development',
      // image: '/assets/images/4.jpg'
      image: '/assets/drones/fd_drone_6.png'
    }
  ];

  activeIndex = signal(0);
}
