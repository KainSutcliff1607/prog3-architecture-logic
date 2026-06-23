import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, InteraccionMensaje } from '../../services/contact.service';

/**
 * @page ContactPage - El Laboratorio de Consultoría (SD2)
 * @author Juan Henríquez
 * @description Implementación de Standalone, Reactive Forms y Micro-CRUD.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class ContactPage implements OnInit {

  public contactForm!: FormGroup;
  public categorias: string[] = ['Desarrollo Web', 'Arquitectura Cloud', 'Soporte Académico', 'Otros'];
  public historial: InteraccionMensaje[] = [];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastCtrl: ToastController
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.actualizarHistorial();
  }

  private initForm() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      categoria: ['Soporte Académico', [Validators.required]],
      mensaje: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  public actualizarHistorial() {
    this.historial = [...this.contactService.obtenerHistorial()].reverse();
  }

  /**
   * @method playSound
   * @description Dispara feedback auditivo basado en la acción.
   */
  private playSound(type: 'send' | 'delete') {
    const audio = new Audio();
    audio.src = type === 'send' 
      ? 'https://www.soundjay.com/buttons/sounds/button-3.mp3'
      : 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
    audio.load();
    audio.play().catch(() => console.log('Audio blocking: User must interact first'));
  }

  /**
   * @method enviar
   * @description Procesa el formulario reactivo y dispara el servicio con feedback.
   */
  public async enviar() {
    if (this.contactForm.invalid) return;

    // Disparar sonido antes del cambio de foco (WhatsApp)
    this.playSound('send');

    const { nombre, mensaje, categoria } = this.contactForm.value;
    this.contactService.enviar(nombre, mensaje, categoria);

    await this.mostrarToast('¡Interacción registrada con éxito!', 'success');
    
    this.contactForm.reset({ categoria: 'Soporte Académico' });
    this.actualizarHistorial();
  }

  /**
   * @method borrar
   * @description Borra un elemento con feedback auditivo.
   */
  public async borrar(id: number) {
    this.contactService.eliminar(id);
    this.playSound('delete');
    this.actualizarHistorial();
    await this.mostrarToast('Entrada eliminada del historial', 'danger');
  }

  private async mostrarToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
