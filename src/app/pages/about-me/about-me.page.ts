import { Component, OnInit } from '@angular/core';

/**
 * @page AboutMePage (Expediente Académico)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Vista de Información Personal del estudiante.
 *
 * Profesor Carlos Márquez: Esta vista demuestra:
 * - Property Binding con [value] e [innerHTML] para mostrar datos del objeto.
 * - Control Flow @for para renderizar acordeones dinámicamente.
 * - Separación de datos (controlador) vs presentación (template HTML).
 */
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {

  // Datos del estudiante (almacenados en el controlador, no hardcodeados en HTML)
  public estudiante = {
    nombre:      'Juan Henríquez',
    ci:          '27.913.162',
    trayecto:    'Trayecto III, Módulo 2',
    materia:     'Programación III',
    universidad: 'UNETI',
    profesor:    'Carlos Alberto Márquez Guillén',
    anno:        '2026'
  };

  // Secciones del acordeón (Data-Driven)
  public secciones: { titulo: string; icono: string; contenido: string }[] = [
    {
      titulo:    'Datos Académicos',
      icono:     'school-outline',
      contenido: 'Actualmente cursando el Trayecto III de la carrera Informática en la Universidad Nacional Experimental de Telecomunicaciones e Informática (UNETI), bajo la guía del Profesor Carlos Márquez en la asignatura Programación III.'
    },
    {
      titulo:    'Enfoque Técnico',
      icono:     'code-slash-outline',
      contenido: 'Especializado en el desarrollo de aplicaciones híbridas con Ionic y Angular, aplicando arquitecturas escalables basadas en NgModules. Comprometido con las buenas prácticas de codificación y los principios SOLID.'
    },
    {
      titulo:    'Filosofía de Código',
      icono:     'bulb-outline',
      contenido: 'Creo firmemente que el código limpio y bien documentado es tan importante como el código funcional. Cada decisión técnica debe poder explicarse y justificarse, como lo demuestran los comentarios en este proyecto.'
    },
    {
      titulo:    'Tecnologías Dominadas',
      icono:     'layers-outline',
      contenido: 'Angular 17 · Ionic 7 · TypeScript · SCSS Puro · NgModules · Git & GitHub · Node.js'
    }
  ];

  constructor() {}
  ngOnInit(): void {}
}
