import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * @bootstrap - Punto de entrada de la aplicación Angular.
 * @description Utiliza platformBrowserDynamic (compilación JIT en memoria)
 * para arrancar el NgModule raíz. Decisión técnica: en un entorno Standalone,
 * esto se haría con bootstrapApplication(), pero aquí usamos la estrategia
 * basada en módulos que permite una declaración centralizada de dependencias.
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
