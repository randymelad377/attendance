import { Component, inject, OnInit } from '@angular/core';
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
import { UserService } from '../../../../services/user-service';

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

  ngOnInit() { }
  
  user = inject(UserService).getUser();
  role = this.user.role;

}
