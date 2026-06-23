import { Injectable } from '@angular/core';

export interface InteraccionMensaje {
  id: number;
  email: string;
  mensaje: string;
  fecha: Date;
  categoria: string;
}

/**
 * @service ContactService (Inyectable Singleton - SD2 Optimizado)
 * @author Juan Henríquez
 * @description Gestión de estado local y comunicación externa.
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly NUMERO_WA = '+584223820075';
  private _historial: InteraccionMensaje[] = [];

  constructor() {}

  /**
   * @method enviar
   * @description Registra la interacción localmente y abre WhatsApp.
   */
  public enviar(email: string, mensaje: string, categoria: string = 'Soporte Académico'): void {
    const nuevoMensaje: InteraccionMensaje = {
      id: Date.now(),
      email,
      mensaje,
      fecha: new Date(),
      categoria
    };

    // Almacenamiento en memoria (Micro-CRUD: Create)
    this._historial.push(nuevoMensaje);

    // Mensaje Personalizado Premium
    const textBase =
      `*🚀 NUEVA CONSULTA - PORTAFOLIO PRO* \n` +
      `------------------------------------------\n` +
      `*📂 Categoría:* ${categoria}\n` +
      `*👤 Usuario:* ${email}\n` +
      `*📝 Mensaje:* ${mensaje}\n` +
      `------------------------------------------\n` +
      `_Enviado desde el Lab de Juan Henríquez_ \n` +
      `_Evaluación SD2 | UNETI 2026_`;

    const url = `https://wa.me/${this.NUMERO_WA}?text=${encodeURIComponent(textBase)}`;
    window.open(url, '_blank');
  }

  /**
   * @method obtenerHistorial
   * @description Retorna los mensajes (Micro-CRUD: Read)
   */
  public obtenerHistorial(): InteraccionMensaje[] {
    return this._historial;
  }

  /**
   * @method eliminar
   * @description Borra una interacción (Micro-CRUD: Delete)
   */
  public eliminar(id: number): void {
    this._historial = this._historial.filter(m => m.id !== id);
  }
}
