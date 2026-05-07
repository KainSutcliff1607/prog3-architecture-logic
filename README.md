# prog3-architecture-logic 🏗️

> Aplicación Híbrida Académica — Evaluación 1 · Programación III · UNETI 2026

<div align="center">

  <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
  <img src="https://img.shields.io/badge/NgModules-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="NgModules" />

</div>

---

## 🎯 Descripción del Proyecto

Aplicación móvil híbrida desarrollada con **Ionic 7** y **Angular 17**, siguiendo la arquitectura de **NgModules tradicionales** y un sistema de diseño **Neobrutalista** implementado con **SCSS puro** (sin frameworks de utilidades externas).

Este proyecto cumple con todos los requerimientos de la **Evaluación 1** de la asignatura Programación III bajo la instrucción del **Profesor Carlos Alberto Márquez Guillén**.

---

## ✨ Características Técnicas Destacadas

### 🏛️ Arquitectura NgModules (Modular Clásica)
Cada página tiene su propio módulo encapsulado (`home.module.ts`, `about-me.module.ts`, `contact.module.ts`), cargado de forma perezosa (**Lazy Loading**) para optimizar el tiempo de inicialización.

### 🎨 Diseño Neobrutalista con SCSS Puro
Sistema de diseño implementado exclusivamente con variables SCSS y reglas CSS nativas:
- Bordes sólidos `3px solid #000`
- Sombras sin blur `4px 4px 0px #000`
- Paleta pastel vibrante: Amarillo · Menta · Rosa · Azul

### 🌊 Hero Animado con `@keyframes` CSS
El fondo dinámico del panel principal utiliza únicamente **CSS animations** (`@keyframes gradientShift`), eliminando la necesidad de archivos de video pesados y garantizando compatibilidad total con GitHub y plataformas de despliegue.

### 📱 3 Vistas Requeridas

| Vista | Ruta | Concepto Angular Demostrado |
|---|---|---|
| **Panel de Inicio** | `/home` | Interpolación `{{ }}`, `@for`, Property Binding |
| **Expediente Académico** | `/about-me` | `ion-accordion` dinámico, `@for` |
| **Canal de Contacto** | `/contact` | `[(ngModel)]`, Event Binding `(click)`, `[disabled]` |

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **Ionic** | `7.x` | Componentes UI móviles (`ion-card`, `ion-accordion`) |
| **Angular** | `17.x` | NgModules, Lazy Loading, Control Flow moderno |
| **TypeScript** | `5.2` | Tipado estricto e interfaces de datos |
| **SCSS Puro** | Nativo | Sistema de diseño Neobrutalista encapsulado |
| **Space Grotesk** | Google Fonts | Tipografía monospace premium |

---

## 🚀 Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/KainSutcliff1607/prog3-architecture-logic.git
cd prog3-architecture-logic

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm start
# El servidor iniciará en http://localhost:4200
```

**Visualización móvil:** Abre DevTools (F12) → ícono de dispositivo móvil → selecciona `iPhone 14` o `Galaxy S20`.

---

## 📐 Convenciones de Código

| Aspecto | Convención |
|---|---|
| Archivos | `kebab-case` (ej: `about-me.page.ts`) |
| Clases/Componentes | `PascalCase` (ej: `AboutMePage`) |
| Variables | `camelCase` (ej: `formNombre`) |
| Comentarios | JSDoc en Inglés + explicación en Español |
| Estilos | SCSS encapsulado por componente |

---

*Autor: **Juan Henríquez** (C.I: 27.913.162) — UNETI · Programación III · 2026*
*Profesor: **Carlos Alberto Márquez Guillén***