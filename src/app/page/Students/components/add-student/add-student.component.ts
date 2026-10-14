import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonModal, IonButton } from '@ionic/angular';
@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  imports: [IonModal, IonButton],
})
export class AddStudentComponent{

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
