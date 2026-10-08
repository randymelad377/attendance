import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {
  IonContent,
  IonGrid,
  IonCard,
  IonCardContent,
  IonBadge,
  IonIcon
} from '@ionic/angular';
import { ConfirmationModalComponent } from '../../../component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
  imports: [    IonContent,
    IonGrid,
    IonCard,
    IonCardContent,
    IonBadge,
    IonIcon,
    ConfirmationModalComponent
],
})
export class AttendanceComponent{

  //GO BACK TO LAST PAGE
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  //STUDENTS
  students = [
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
    {
      "name": "Randy Flores",
      "school_id": "SC0001",
      "mark": "none"
    },
  ]

  //OPEN CONFIRMATION
  isConfirmationOpen = false;
  openConfirmation() {
    this.isConfirmationOpen = true;
  }
}
