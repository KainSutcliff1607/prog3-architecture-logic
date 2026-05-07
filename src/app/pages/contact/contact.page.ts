import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

/**
 * @page ContactPage (Canal de Comunicación Directa)
 * @author Juan Henríquez - C.I: 27.913.162
 * @description Vista de Contacto con formulario reactivo.
 *
 * Profesor Carlos Márquez: Esta página demuestra los 4 tipos de Binding de Angular:
 *
 * 1. Two-Way Binding [(ngModel)]:  Conecta los campos del formulario a las
 *    variables 'formNombre' y 'formMensaje'. Cualquier cambio en la vista
 *    se refleja directamente en la variable del controlador y viceversa.
 *
 * 2. Event Binding (click):        El botón dispara el método enviarMensaje()
 *    de este controlador cuando el usuario hace clic.
 *
 * 3. Property Binding [disabled]:  El botón de envío se deshabilita
 *    automáticamente si los campos están vacíos.
 *
 * 4. Interpolación {{ }}:          Los textos de la UI vienen del controlador,
 *    no están fijos en el HTML.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  // Variables enlazadas via [(ngModel)] — Two-Way Data Binding
  public formNombre:  string  = '';
  public formMensaje: string  = '';

  // Estado visual del formulario
  public enviado:     boolean = false;
  public cargando:    boolean = false;

  // Textos de la UI (separados del HTML para facilitar traducción/mantenimiento)
  public tituloSeccion: string = 'Canal de Comunicación';
  public subtitulo:     string = 'Disponible para proyectos y consultas académicas';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  /**
   * @method enviarMensaje
   * @description Captura los datos del formulario y los pasa al servicio.
   * Aplica el principio RSP: este método SOLO orquesta, no ejecuta la lógica.
   */
  public enviarMensaje(): void {
    if (!this.formNombre.trim() || !this.formMensaje.trim()) return;

    this.cargando = true;

    // Delegación de la lógica al ContactService (principio SOLID - RSP)
    this.contactService.enviar(this.formNombre, this.formMensaje);

    // Pequeño delay para feedback visual
    setTimeout(() => {
      this.cargando  = false;
      this.enviado   = true;
      // Limpiar formulario tras envío exitoso
      this.formNombre  = '';
      this.formMensaje = '';
    }, 800);
  }

  /** @method resetear — Permite volver a escribir un mensaje nuevo */
  public resetear(): void {
    this.enviado = false;
  }
}
