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
import { SubjectModalComponent } from '../subject-modal/subject-modal.component';
import { ConfirmationModalComponent } from '../../../../component/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-subject-cards',
  templateUrl: './subject-cards.component.html',
  styleUrls: ['./subject-cards.component.scss'],
  imports: [
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
    SubjectModalComponent,
  ConfirmationModalComponent
],
})
export class SubjectCardsComponent{

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  isArchiveOpen = false;

  openArchive() {
    this.isArchiveOpen = true;
  }

  isSubjectHaveSemester = false;

}
