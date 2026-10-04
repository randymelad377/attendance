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
import { SectionModalComponent } from '../section-modal/section-modal.component';
import { ConfirmationModalComponent } from '../../../../component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-section-cards',
  templateUrl: './section-cards.component.html',
  styleUrls: ['./section-cards.component.scss'],
  imports: [
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
    SectionModalComponent,
  ConfirmationModalComponent
],
})
export class SectionCardsComponent{

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  isArchiveOpen = false;

  openArchive() {
    this.isArchiveOpen = true;
  }

}
