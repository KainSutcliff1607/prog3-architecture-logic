import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/**
 * @routing AppRoutingModule (Lazy Loading por NgModule)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Configuración de rutas con Lazy Loading modular.
 *
 * Profesor Carlos Márquez: Cada ruta usa la expresión `import()` dinámica
 * para cargar el módulo de la página SOLO cuando el usuario navega hacia ella.
 * Esto reduce el tamaño del bundle inicial y mejora el tiempo de carga (TTI).
 * Este patrón es diferente al enrutamiento Standalone, donde se importan
 * componentes individuales; aquí se importan módulos completos.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./pages/about-me/about-me.module').then(m => m.AboutMePageModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    // Fallback: redirige cualquier ruta desconocida al Home
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
