import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { LucideAngularModule, Target, Shield, Cpu, ArrowRight } from 'lucide-angular';
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [LucideAngularModule, RevealComponent],
  templateUrl: './who-we-are.html',
  styleUrl: './who-we-are.scss'
})
export class WhoWeAre implements AfterViewInit {
  @ViewChild('whoSection') whoSection!: ElementRef;
  
  readonly Target = Target;
  readonly Shield = Shield;
  readonly Cpu = Cpu;
  readonly ArrowRight = ArrowRight;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.whoSection.nativeElement);
  }
}