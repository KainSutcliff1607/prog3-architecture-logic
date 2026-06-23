import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * @bootstrap - Punto de entrada Standalone (SD2)
 * @author Juan Henríquez
 * @description Migración de arquitectura modular a componentes independientes.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
