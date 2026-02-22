import { Component, inject, PLATFORM_ID } from '@angular/core';
import { PageHeader } from "../../shared/page-header/page-header";
import { BentoImage, BentoService } from '../../core/services/bento.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ScrollRevealComponent } from "../../shared/scroll-reveal/scroll-reveal";
import { Timeline } from "../../shared/timeline/timeline";


@Component({
  selector: 'app-who',
  imports: [PageHeader, CommonModule, ScrollRevealComponent, Timeline],
  templateUrl: './who.html',
  styleUrl: './who.scss',
})
export class Who {
  private platformId = inject(PLATFORM_ID);
  private bentoService = inject(BentoService);

  images: BentoImage[] = this.bentoService.getImages();

  isBrowser = isPlatformBrowser(this.platformId);
}

