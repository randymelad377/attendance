import { Component, Input, OnInit } from '@angular/core';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonButton
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
    IonCardSubtitle,
  IonButton
],
})
export class SemesterCardsComponent{

  showMenu = false;

  @Input() isOngoing = false;
  
}
