import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CountupComponent } from "../countup/countup";
import { RevealComponent } from "../reveal/reveal";

@Component({
  selector: 'app-research-development',
  standalone: true,
  imports: [CommonModule, CountupComponent, RevealComponent],
  templateUrl: './research-development.html',
  styleUrl: './research-development.scss'
})
export class ResearchDevelopmentComponent implements OnInit {

  isBrowser: boolean = false;

  gridLines = Array(6).fill(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {}
}