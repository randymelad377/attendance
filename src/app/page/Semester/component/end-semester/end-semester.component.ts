import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-end-semester',
  templateUrl: './end-semester.component.html',
  styleUrls: ['./end-semester.component.scss'],
  imports: [
    IonModal,
    IonButton
  ],
})
export class EndSemesterComponent {
  

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

}
