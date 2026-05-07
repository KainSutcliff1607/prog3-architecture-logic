import { Component, OnInit } from '@angular/core';

/**
 * @page HomePage (Inicio / Panel de Bienvenida)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Vista principal de la aplicación.
 *
 * Profesor Carlos Márquez: Se demuestran aquí los conceptos de:
 * - Interpolación de datos: {{ titulo }}, {{ descripcion }}
 * - Property Binding: [class], [href]
 * - Directivas estructurales @for para renderizar tarjetas dinámicamente
 *   desde el array 'habilidades' definido en el controlador.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Datos de bienvenida (Interpolación)
  public titulo: string = 'Hola, Bienvenido Profesor 👋';
  public subtitulo: string = 'Juan Henríquez';
  public descripcion: string = 'Estudiante de Informática · UNETI · Evaluación 1 — Programación III';

  // Array de habilidades renderizado via @for (Data-Driven UI)
  public habilidades: { nombre: string; nivel: string; color: string }[] = [
    { nombre: 'Angular 17',    nivel: 'Avanzado',     color: '#FFB3BA' },
    { nombre: 'Ionic 7',       nivel: 'Avanzado',     color: '#A8E6CF' },
    { nombre: 'TypeScript',    nivel: 'Intermedio',   color: '#B4D4FF' },
    { nombre: 'SCSS/Sass',     nivel: 'Avanzado',     color: '#FFE566' },
    { nombre: 'NgModules',     nivel: 'Avanzado',     color: '#FFCBA4' },
    { nombre: 'Git & GitHub',  nivel: 'Intermedio',   color: '#D4A5FF' },
  ];

  // Proyectos destacados
  public proyectos: { titulo: string; descripcion: string; url: string }[] = [
    {
      titulo: 'prog3-architecture-logic',
      descripcion: 'Aplicación Ionic con arquitectura NgModules y diseño Neobrutalista. Evaluación 1 de Programación III.',
      url: 'https://github.com/KainSutcliff1607/prog3-architecture-logic'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
