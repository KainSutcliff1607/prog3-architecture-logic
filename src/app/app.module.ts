import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactService } from './services/contact.service';

/**
 * @module AppModule (NgModule Raíz)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Módulo centralizador de la aplicación.
 *
 * Profesor Carlos Márquez: A diferencia de la arquitectura "Standalone"
 * donde cada componente importa sus propias dependencias, aquí el AppModule
 * actúa como un "manifiesto único" de la aplicación. Importa los módulos
 * globales (IonicModule, BrowserModule) y delega el resto a los módulos
 * de cada página a través del Lazy Loading en AppRoutingModule.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md' // Material Design como base visual
    }),
    AppRoutingModule,
  ],
  providers: [
    // IonicRouteStrategy optimiza la transición entre rutas para apps móviles
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ContactService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
