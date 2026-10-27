import { Component, inject, OnInit } from '@angular/core';
import { SemesterCardsComponent } from '../component/semester-cards/semester-cards.component';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from '@ionic/angular';
import { EndSemesterComponent } from '../component/end-semester/end-semester.component';
import { RouterLink } from '@angular/router';

import { UserService } from '../../../services/user-service';

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
    EndSemesterComponent,
    RouterLink
  ],
})
export class SemesterComponent{

  user = inject(UserService).getUser();
  role = this.user.role;

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

  isLastSemesterActive = false;

}
