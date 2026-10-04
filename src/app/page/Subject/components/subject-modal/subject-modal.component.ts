import { IonButton, IonModal } from '@ionic/angular';
import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.scss'],
  imports: [
    IonModal,
    IonButton
  ],
})
export class SubjectModalComponent{

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

}
