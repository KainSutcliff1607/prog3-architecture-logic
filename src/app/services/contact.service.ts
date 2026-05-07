import { Injectable } from '@angular/core';

/**
 * @service ContactService (Inyectable Singleton)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Servicio encargado de la lógica de comunicación.
 *
 * Profesor Carlos Márquez: Este servicio aplica el Principio de
 * Responsabilidad Única (S en SOLID). La vista (contact.page.html)
 * solo se encarga de RECOGER los datos del usuario via [(ngModel)].
 * Este servicio se encarga exclusivamente de PROCESAR y ENVIAR esos datos.
 * Si en el futuro se cambia WhatsApp por un email o una API REST,
 * SOLO se modifica este archivo, sin tocar la vista.
 */
@Injectable({
  providedIn: 'root' // Disponible en toda la app sin necesidad de declararlo en módulos hijos
})
export class ContactService {

  // Número de contacto del estudiante
  private readonly NUMERO_WA = '584249999999'; // Reemplazar con número real

  /**
   * @method enviar
   * @description Construye una URL de WhatsApp con los datos del formulario
   * y la abre en una nueva pestaña del navegador.
   * @param nombre - Nombre del remitente recopilado via Two-Way Binding
   * @param mensaje - Texto del mensaje recopilado via Two-Way Binding
   */
  public enviar(nombre: string, mensaje: string): void {
    if (!nombre.trim() || !mensaje.trim()) {
      console.warn('[ContactService] Nombre o mensaje vacíos. Operación cancelada.');
      return;
    }

    // Construcción dinámica del texto con formato Markdown para WhatsApp
    const textBase =
      `Hola! 👋 Te contacto desde *prog3-architecture-logic*.\n\n` +
      `*👤 Remitente:* ${nombre}\n` +
      `*📝 Mensaje:* ${mensaje}\n\n` +
      `_Evaluación 1 — Programación III — UNETI 2026_`;

    // encodeURIComponent garantiza que caracteres especiales (ñ, á, saltos de línea)
    // no rompan la URL generada
    const url = `https://wa.me/${this.NUMERO_WA}?text=${encodeURIComponent(textBase)}`;

    // window.open abre WhatsApp en una nueva pestaña sin bloquear la SPA
    window.open(url, '_blank');
  }
}
