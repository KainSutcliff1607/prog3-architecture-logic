import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from './contact.page';

/**
 * @module ContactPageModule
 * @author Juan Henríquez
 * @description Módulo de la página de Contacto.
 * IMPORTANTE: FormsModule debe declararse AQUÍ (en el módulo de la página)
 * y no en el AppModule. Esto es lo que permite el uso de [(ngModel)]
 * en el template de ContactPage de forma encapsulada.
 */
const routes: Routes = [
  { path: '', component: ContactPage }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,        // ← Habilita Two-Way Binding [(ngModel)] en este módulo
    RouterModule.forChild(routes)
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
