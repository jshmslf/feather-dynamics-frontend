import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { NewsBar } from "./shared/news-bar/news-bar";
import { ScrollTopComponent } from "./shared/scroll-top/scroll-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NewsBar, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fd-2');
}
