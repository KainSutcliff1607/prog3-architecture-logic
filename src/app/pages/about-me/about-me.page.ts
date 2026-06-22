import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AboutMePage implements OnInit {

  public estudiante = {
    nombre:      'Juan Henríquez',
    ci:          '27.913.162',
    trayecto:    'Trayecto III, Módulo 2',
    materia:     'Programación III',
    universidad: 'UNETI',
    profesor:    'Carlos Alberto Márquez Guillén',
    anno:        '2026'
  };

  public secciones: { titulo: string; icono: string; contenido: string }[] = [
    {
      titulo:    'Datos Académicos',
      icono:     'school-outline',
      contenido: 'Actualmente cursando el Trayecto III de la carrera Informática en la Universidad Nacional Experimental de Telecomunicaciones e Informática (UNETI), bajo la guía del Profesor Carlos Márquez en la asignatura Programación III.'
    },
    {
      titulo:    'Enfoque Técnico (SD2)',
      icono:     'code-slash-outline',
      contenido: 'Especializado en el desarrollo de aplicaciones híbridas con Ionic y Angular, migrando de arquitecturas Modulares legacy a componentes Standalone modernos.'
    },
    {
      titulo:    'Filosofía de Código',
      icono:     'bulb-outline',
      contenido: 'Creo firmemente que el código limpio y bien documentado es tan importante como el código funcional. Cada decisión técnica debe poder explicarse y justificarse.'
    },
    {
      titulo:    'Tecnologías Dominadas',
      icono:     'layers-outline',
      contenido: 'Angular 18 · Ionic 8 · TypeScript · Standalone Architecture · Reactive Forms'
    }
  ];

  constructor() {}
  ngOnInit(): void {}
}
