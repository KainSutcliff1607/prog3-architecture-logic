import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { routes } from './app-routing.module'; // Reusaremos las rutas existentes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(IonicModule.forRoot({}))
  ]
};
