import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

/**
 * @module HomePageModule
 * @author Juan Henríquez
 * @description Módulo encapsulado de la página Inicio.
 * Profesor: Este módulo declara SOLO el componente HomePage y sus dependencias.
 * Gracias al Lazy Loading, este módulo solo se carga cuando el usuario navega a /home.
 */
const routes: Routes = [
  { path: '', component: HomePage }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [HomePage]
})
export class HomePageModule {}
