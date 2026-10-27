import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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
import { UserService } from '../../../../services/user-service';

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
  IonButton,
  RouterLink
],
})
export class SemesterCardsComponent{

  user = inject(UserService).getUser();
  role = this.user.role;
  showMenu = false;

  @Input() isOngoing = false;
  
}
