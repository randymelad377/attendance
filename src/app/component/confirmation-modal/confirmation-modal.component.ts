import { IonButton, IonIcon, IonModal } from '@ionic/angular';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  imports: [
    IonModal,
    IonButton,
    IonIcon
  ],
})
export class ConfirmationModalComponent {

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

  confirmAction() {
    this.confirmed.emit();
    this.closed.emit();
  }
}
