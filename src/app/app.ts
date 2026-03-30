import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { NewsBar } from "./shared/news-bar/news-bar";
import { ScrollTopComponent } from "./shared/scroll-top/scroll-top";
import { Title } from '@angular/platform-browser';
import { GtmService } from './core/services/gtm.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NewsBar, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('fd-2');

  constructor(
    private router: Router,
    private title_route: Title,
    private gtm: GtmService
  ) { }
  
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.gtm.trackPageView(
        event.urlAfterRedirects,
        this.title_route.getTitle()
      )
    })
  }
}
