import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonItem, IonLabel, IonList } from '@ionic/angular';

@Component({
  selector: 'app-class-students',
  templateUrl: './class-students.component.html',
  styleUrls: ['./class-students.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
  ],
})
export class ClassStudentsComponent{

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
