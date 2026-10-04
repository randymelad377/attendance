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
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCardContent,
    IonCardSubtitle
  ],
})
export class ActionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
