import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-student-card-modal',
  templateUrl: './student-card-modal.component.html',
  styleUrls: ['./student-card-modal.component.scss'],
  imports: [
    IonButton,
    IonModal
  ],
})
export class StudentCardModalComponent{
  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

    closeModal() {
    this.closed.emit();
  }
}
