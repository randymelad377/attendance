import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, trashOutline, timeOutline } from 'ionicons/icons';

import {
  IonList,
  IonCard,
  IonCardContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonButton
} from '@ionic/angular'
import { UserService } from '../../../../services/user-service';
import { AddSchedulesComponent } from '../add-schedules/add-schedules.component';
@Component({
  selector: 'app-class-schedules',
  templateUrl: './class-schedules.component.html',
  styleUrls: ['./class-schedules.component.scss'],
  imports: [
  IonList,
  IonCard,
  IonCardContent,
    IonIcon,
    TitleCasePipe,
    IonFab,
    IonFabButton,
    AddSchedulesComponent,
  IonButton
],
})
export class ClassSchedulesComponent{

  constructor() {
    addIcons({
      add,
      trashOutline,
      timeOutline
    });
  }
  schedules = [
    {
      "day": "monday",
      "start_time" : "11:00am",
      "end_time" : "01:00pm"
    },
    {
      "day": "tuesday",
      "start_time" : "11:00am",
      "end_time" : "01:00pm"
    },
    {
      "day": "thursday",
      "start_time" : "11:00am",
      "end_time" : "01:00pm"
    },
    
  ]

  removeSchedule(index: number) {
    this.schedules = this.schedules.filter((_, i) => i !== index);
  }

  user = inject(UserService).getUser();
  role = this.user.role;

  isAddScheduleOpen = false;

openAddSchedule() {
  this.isAddScheduleOpen = true;
}

  isSemesterActive = false;
}
