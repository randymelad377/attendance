import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.scss'],
  imports: [
    IonButton,
    IonModal
  ],
})
export class AddSemesterComponent{
  

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

}
