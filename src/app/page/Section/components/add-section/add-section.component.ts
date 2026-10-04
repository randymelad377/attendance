import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
  imports: [
    IonButton,
    IonModal
  ],
})
export class AddSectionComponent{

  @Input() isOpen = true;

  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.closed.emit();
  }
}
