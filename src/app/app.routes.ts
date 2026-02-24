import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Who } from './pages/who/who';
import { What } from './pages/what/what';
import { ContactUs } from './pages/contact-us/contact-us';
import { NewsArticle } from './pages/news-article/news-article';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'news', component: News },
    { path: 'news/:category/:slug', component: NewsArticle },
    { path: 'who-we-are', component: Who },
    { path: 'what-we-do', component: What },
    { path: 'contact-us', component: ContactUs },


    {path: '**', component: NotFound }
];
