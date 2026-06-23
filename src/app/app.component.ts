import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class AppComponent {
  public menuItems = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Sobre Mí', url: '/about-me', icon: 'person-outline' },
    { title: 'Contacto', url: '/contact', icon: 'mail-outline' }
  ];

  constructor() {}
}
