import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Who } from './pages/who/who';
import { What } from './pages/what/what';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'news', component: News },
    { path: 'who-we-are', component: Who },
    { path: 'what-we-do', component: What },
    { path: 'contact-us', component: ContactUs },
];
