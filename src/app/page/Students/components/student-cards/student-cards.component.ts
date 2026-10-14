import { Component, OnInit, EventEmitter } from '@angular/core';
import {IonList, IonItem, IonLabel, IonAvatar, IonImg, IonButton, IonIcon} from '@ionic/angular';
import {StudentCardModalComponent} from '../student-card-modal/student-card-modal.component';
@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonLabel, 
    IonAvatar,
    IonImg,
    IonButton,
    IonIcon,
    StudentCardModalComponent
  ],
})


export class StudentCardsComponent {

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  students = [
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
    {
      "name": "Randy Flores",
      "school_id" : "SC0001"
    },
  ]
}
