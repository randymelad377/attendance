import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-join-student',
  templateUrl: './join-student.component.html',
  styleUrls: ['./join-student.component.scss'],
  imports: [IonModal, IonButton],
})
export class JoinStudentComponent{
  

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }

}
