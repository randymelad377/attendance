import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle
} from '@ionic/angular';

@Component({
  selector: 'app-class-cards',
  templateUrl: './class-cards.component.html',
  styleUrls: ['./class-cards.component.scss'],
  imports: [
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
    IonCardTitle,
  RouterLink
],
})
export class ClassCardsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
