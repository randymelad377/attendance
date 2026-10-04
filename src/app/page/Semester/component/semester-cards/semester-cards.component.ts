import { Component, OnInit } from '@angular/core';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle
} from '@ionic/angular';

@Component({
  selector: 'app-semester-cards',
  templateUrl: './semester-cards.component.html',
  styleUrls: ['./semester-cards.component.scss'],
  imports: [
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle
],
})
export class SemesterCardsComponent  implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit() {}

}
