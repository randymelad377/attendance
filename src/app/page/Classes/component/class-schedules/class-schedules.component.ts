import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  IonList,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/angular'

@Component({
  selector: 'app-class-schedules',
  templateUrl: './class-schedules.component.html',
  styleUrls: ['./class-schedules.component.scss'],
  imports: [
  IonList,
  IonCard,
  IonCardContent,
    IonIcon,
  TitleCasePipe
],
})
export class ClassSchedulesComponent{
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
}
