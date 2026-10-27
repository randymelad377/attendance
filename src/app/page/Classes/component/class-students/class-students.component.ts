import { Component, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import {
  IonContent,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/angular';

import { UserService } from '../../../../services/user-service';
import { JoinStudentComponent } from '../join-student/join-student.component';

@Component({
  selector: 'app-class-students',
  templateUrl: './class-students.component.html',
  styleUrls: ['./class-students.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonFab,
    IonFabButton,
    IonIcon,
    JoinStudentComponent
  ],
})
export class ClassStudentsComponent {

  constructor() {
    addIcons({ add });
  }

  user = inject(UserService).getUser();
  role = this.user.role;

  isAddOpen = false; // Important: keep it closed initially

  students = [
    { name: 'Randy Flores', school_id: 'SC0001' },
    { name: 'Randy Flores', school_id: 'SC0002' },
    { name: 'Randy Flores', school_id: 'SC0003' }
  ];

  openAddSub() {
    this.isAddOpen = true;
  }
}