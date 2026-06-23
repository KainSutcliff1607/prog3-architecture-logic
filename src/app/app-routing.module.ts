import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./pages/about-me/about-me.page').then(m => m.AboutMePage)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.page').then(m => m.ContactPage)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
