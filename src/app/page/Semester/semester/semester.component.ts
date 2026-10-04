import { Component, OnInit } from '@angular/core';
import { SemesterCardsComponent } from '../component/semester-cards/semester-cards.component';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss'],
  imports: [
    SemesterCardsComponent,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon

  ],
})
export class SemesterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
