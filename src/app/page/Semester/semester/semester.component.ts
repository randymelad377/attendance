import { Component, OnInit } from '@angular/core';
import { SemesterCardsComponent } from '../component/semester-cards/semester-cards.component';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular';
import { AddSemesterComponent } from '../component/add-semester/add-semester.component';
import { EndSemesterComponent } from '../component/end-semester/end-semester.component';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss'],
  imports: [
    SemesterCardsComponent,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    AddSemesterComponent,
    EndSemesterComponent
  ],
})
export class SemesterComponent{
  
  isSemesterOngoing = false;

  isEndOpen = false;
  isAddOpen = false;
  openAddSem() {
    if (this.isSemesterOngoing) {
      this.isEndOpen = true;
      return;
    }

    this.isAddOpen = true;
  }

}
