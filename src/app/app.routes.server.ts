import { RenderMode, ServerRoute } from '@angular/ssr';
import { NewsService } from './core/services/news.service';

const newsService = new NewsService();

export const serverRoutes: ServerRoute[] = [
  {
    path: 'news/:category/:slug',
    renderMode: RenderMode.Prerender,

    getPrerenderParams: async () => {
      const allArticles = newsService.getAll();

      return allArticles.map(article => ({
          category: article.category.toLowerCase(),
          slug: article.slug,
      }));
    }
  },

  {
    path: '',
    renderMode: RenderMode.Prerender
  },

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
