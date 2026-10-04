import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
  imports: [
    IonButton,
    IonModal
  ],
})
export class AddSubjectComponent {

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
