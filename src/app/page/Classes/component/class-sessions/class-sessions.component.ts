import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonBadge, IonButton, IonCard, IonCardContent, IonIcon, IonList } from '@ionic/angular';

@Component({
  selector: 'app-class-sessions',
  templateUrl: './class-sessions.component.html',
  styleUrls: ['./class-sessions.component.scss'],
  imports: [
    IonList,
    IonCard,
    IonCardContent,
    IonBadge,
    IonButton,
    IonIcon,
    TitleCasePipe,
    RouterLink
  ],
})
export class ClassSessionsComponent{
  sessions = [
    {
      session_number: 1,
      status: 'met',
      date: '02-05-2026'
    },
    {
      session_number: 2,
      status: 'met',
      date: '02-12-2026'
    },
    {
      session_number: 3,
      status: 'met',
      date: '02-19-2026'
    },
    {
      session_number: 4,
      status: 'met',
      date: '02-26-2026'
    }
  ];
}
