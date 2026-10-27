import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonLabel, IonModal, IonRow, IonSegment, IonSegmentButton, SegmentCustomEvent } from '@ionic/angular';
import { AddSubjectComponent } from '../../../Subject/components/add-subject/add-subject.component';
import { AddSectionComponent } from '../../../Section/components/add-section/add-section.component';
import { ConfirmationModalComponent } from '../../../../component/confirmation-modal/confirmation-modal.component';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../../services/user-service';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonButton,
    AddSubjectComponent,
    AddSectionComponent,
    ConfirmationModalComponent,
    RouterLink
  ],
})
export class AddSemesterComponent{

  user = inject(UserService).getUser();
  role = this.user.role;

  //FOR YEAR LEVEL
  year_level = "1rst_year";
  onYearChange(event: SegmentCustomEvent) {
    this.year_level = event.detail.value as string;
  }

  //FOR YEAR LEVEL
  isSubject = true;
  onIsSubjectChange(event: SegmentCustomEvent) {
    this.isSubject = event.detail.value === 'true';
  }
  
  isOpenAddSection = false;
  isOpenAddSubject = false;

  openAdd(){

    if (this.isSubject) {
      this.isOpenAddSubject = true;
    } else {
      this.isOpenAddSection = true;
    }
  }
  
  //OPEN CONFIRMATION
  isConfirmationOpen = false;
  openConfirmation() {
    this.isConfirmationOpen = true;
  }
}
