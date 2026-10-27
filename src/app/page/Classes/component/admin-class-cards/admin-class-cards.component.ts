import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/angular';
import { ConfirmationModalComponent } from '../../../../component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-admin-class-cards',
  templateUrl: './admin-class-cards.component.html',
  styleUrls: ['./admin-class-cards.component.scss'],
  imports: [
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
    IonCardTitle,
    RouterLink,
  ConfirmationModalComponent
],
})
export class AdminClassCardsComponent{
      //OPEN CONFIRMATION
  isConfirmationOpen = false;
  openConfirmation() {
    this.isConfirmationOpen = true;
  }
}
