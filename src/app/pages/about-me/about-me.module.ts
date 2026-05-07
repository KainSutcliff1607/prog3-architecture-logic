import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePage } from './about-me.page';

/**
 * @module AboutMePageModule
 * @author Juan Henríquez
 * @description Módulo encapsulado de la página "Expediente Académico".
 * Cada módulo de página es independiente: si se elimina esta ruta del
 * AppRoutingModule, el resto de la app no se ve afectada.
 */
const routes: Routes = [
  { path: '', component: AboutMePage }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
