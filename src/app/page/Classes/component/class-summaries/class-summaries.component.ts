import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonAvatar, IonBadge, IonCard, IonCardContent, IonList } from '@ionic/angular';
import { UserService } from '../../../../services/user-service';

@Component({
  selector: 'app-class-summaries',
  templateUrl: './class-summaries.component.html',
  styleUrls: ['./class-summaries.component.scss'],
  imports: [
  IonList,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonBadge,
  KeyValuePipe,
  TitleCasePipe],
})
export class ClassSummariesComponent{
  attendances = [
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "normal",
      "attendances": {
        "present": 5,
        "absent": 2,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
    {
      "name": "Randy Flores",
      "school_id": "SC001",
      "status": "warning",
      "attendances": {
        "present": 5,
        "absent": 3,
        "late": 0,
        "excuse" : 1
      }
    },
  ]

  user = inject(UserService).getUser();
  role = this.user.role;
}
