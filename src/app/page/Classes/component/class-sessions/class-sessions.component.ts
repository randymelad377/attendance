
import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { UserService } from '../../../../services/user-service';
import {
  AddSessionComponent,
  ClassSchedule,
  NewSession
} from '../add-session/add-session.component';

@Component({
  selector: 'app-class-sessions',
  standalone: true,
  templateUrl: './class-sessions.component.html',
  styleUrls: ['./class-sessions.component.scss'],
  imports: [
    IonList,
    IonCard,
    IonCardContent,
    IonBadge,
    IonButton,
    IonIcon,
    IonFab,
    IonFabButton,
    TitleCasePipe,
    RouterLink,
    AddSessionComponent
  ]
})
export class ClassSessionsComponent {

  constructor() {
    addIcons({ add });
  }

  user = inject(UserService).getUser();
  role = this.user.role;

  isAddSessionOpen = false;

  schedules: ClassSchedule[] = [
    {
      day: 'monday',
      start_time: '11:00am',
      end_time: '01:00pm'
    },
    {
      day: 'tuesday',
      start_time: '11:00am',
      end_time: '01:00pm'
    },
    {
      day: 'thursday',
      start_time: '11:00am',
      end_time: '01:00pm'
    }
  ];

  sessions: (NewSession & {
    session_number: number;
    status: string;
  })[] = [
    {
      session_number: 1,
      status: 'met',
      date: '2026-02-05',
      schedule: this.schedules[0]
    },
    {
      session_number: 2,
      status: 'met',
      date: '2026-02-12',
      schedule: this.schedules[0]
    },
    {
      session_number: 3,
      status: 'met',
      date: '2026-02-19',
      schedule: this.schedules[0]
    },
    {
      session_number: 4,
      status: 'met',
      date: '2026-02-26',
      schedule: this.schedules[0]
    }
  ];

  openAddSession() {
    this.isAddSessionOpen = true;
  }

  handleSessionSaved(session: NewSession) {
    this.sessions = [
      ...this.sessions,
      {
        ...session,
        session_number: this.sessions.length + 1,
        status: 'upcoming'
      }
    ];
  }

  isSemesterActive = false;
}
