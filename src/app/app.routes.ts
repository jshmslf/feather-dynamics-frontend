import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Who } from './pages/who/who';
import { What } from './pages/what/what';
import { ContactUs } from './pages/contact-us/contact-us';
import { NewsArticle } from './pages/news-article/news-article';
import { NotFound } from './pages/not-found/not-found';
import { Darpa } from './pages/darpa/darpa';
import { DeltaY4 } from './pages/delta-y4/delta-y4';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'news', component: News },
    { path: 'news/:category/:slug', component: NewsArticle },
    { path: 'who-we-are', component: Who },
    { path: 'what-we-do', component: What },
    { path: 'contact-us', component: ContactUs },
    { path: 'darpa-lift', component: Darpa },
    { path: 'delta-y4', component: DeltaY4 },

    {
        path: 'privacy-policy',
        loadComponent: () =>
        import('./pages/privacy-policy.page').then((m) => m.PrivacyPolicyPage),
        title: 'Privacy Policy',
    },
    {
        path: 'terms-and-conditions',
        loadComponent: () =>
        import('./pages/terms-and-conditions.page').then(
            (m) => m.TermsAndConditionsPage
        ),
        title: 'Terms & Conditions',
    },

    {path: '**', component: NotFound }
];
