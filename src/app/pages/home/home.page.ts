import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage implements OnInit {

  public titulo: string = 'Hola, Bienvenido Profesor 👋';
  public subtitulo: string = 'Juan Henríquez';
  public descripcion: string = 'Estudiante de Informática · UNETI · Evaluación 1 — Programación III';

  public habilidades: { nombre: string; nivel: string; color: string }[] = [
    { nombre: 'Angular 18', nivel: 'Standalone', color: '#FFB3BA' },
    { nombre: 'Ionic 8', nivel: 'Modern', color: '#A8E6CF' },
    { nombre: 'TypeScript', nivel: 'Intermedio', color: '#B4D4FF' },
    { nombre: 'SCSS/Sass', nivel: 'Avanzado', color: '#FFE566' },
    { nombre: 'Clean Architecture', nivel: 'SD2', color: '#FFCBA4' },
    { nombre: 'Git & GitHub', nivel: 'Intermedio', color: '#D4A5FF' },
  ];

  public proyectos: { titulo: string; descripcion: string; url: string }[] = [
    {
      titulo: 'prog3-architecture-logic',
      descripcion: 'Aplicación base con arquitectura modular NgModules y diseño Neobrutalista.',
      url: 'https://github.com/KainSutcliff1607/prog3-architecture-logic'
    },
    {
      titulo: 'Tarea-1-Programacion-III',
      descripcion: 'Repositorio oficial de entrega para la Evaluación 1 de Programación III - UNETI.',
      url: 'https://github.com/KainSutcliff1607/Tarea-1-Programacion-III'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
