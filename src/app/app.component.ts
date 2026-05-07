import { Component } from '@angular/core';

/**
 * @component AppComponent (Shell de la Aplicación)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Componente raíz que actúa como contenedor principal.
 * Aloja el ion-router-outlet que renderiza las páginas según la ruta activa.
 *
 * Profesor Carlos Márquez: Este componente es el "esqueleto" de la aplicación.
 * El ion-split-pane permite un menú lateral en pantallas grandes (tablet/desktop)
 * y un menú tipo hamburguesa en móvil, todo gestionado por IonicModule.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // Array de menú: los datos se separan del template para facilitar el mantenimiento
  public menuItems = [
    { title: 'Inicio',           url: '/home',     icon: 'home-outline'    },
    { title: 'Expediente',       url: '/about-me', icon: 'person-outline'  },
    { title: 'Canal de Contacto',url: '/contact',  icon: 'mail-outline'    },
  ];

  constructor() {}
}
