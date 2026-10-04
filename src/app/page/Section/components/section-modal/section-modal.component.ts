import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';
import { ConfirmationModalComponent } from '../../../../component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-section-modal',
  templateUrl: './section-modal.component.html',
  styleUrls: ['./section-modal.component.scss'],
  imports: [
    IonModal,
    IonButton,
  ],
})
export class SectionModalComponent{

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
