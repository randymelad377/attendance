import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonRouterOutlet, IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonLabel, IonSegment, IonSegmentButton, IonSelect, IonButton } from '@ionic/angular';
import { ClassSessionsComponent } from '../component/class-sessions/class-sessions.component';
import { ClassSchedulesComponent } from '../component/class-schedules/class-schedules.component';
import { ClassStudentsComponent } from '../component/class-students/class-students.component';
import { ClassSummariesComponent } from '../component/class-summaries/class-summaries.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from '../../../component/confirmation-modal/confirmation-modal.component';
import { UserService } from '../../../services/user-service';

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
    IonCardContent,
    RouterLink,
    ClassSessionsComponent,
    ClassSchedulesComponent,
    ClassStudentsComponent,
    ClassSummariesComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    FormsModule,
    RouterLink,
    RouterOutlet,
    IonButton,
    ConfirmationModalComponent
  ],
})
export class SpecClassComponent {
  
  selectedSection = 'students';

  user = inject(UserService).getUser();
  role = this.user.role;

      //OPEN CONFIRMATION
  isConfirmationOpen = false;
  openConfirmation() {
    this.isConfirmationOpen = true;
  }

}
