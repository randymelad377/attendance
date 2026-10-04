import { Component, OnInit } from '@angular/core';
import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid } from '@ionic/angular';

@Component({
  selector: 'app-spec-class',
  templateUrl: './spec-class.component.html',
  styleUrls: ['./spec-class.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonBadge,
    IonCardContent
  ],
})
export class SpecClassComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
