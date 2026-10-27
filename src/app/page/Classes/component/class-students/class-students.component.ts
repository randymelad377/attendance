
import { Component, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, trashOutline } from 'ionicons/icons';

import {
  IonContent,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonButton
} from '@ionic/angular';

import { UserService } from '../../../../services/user-service';
import { JoinStudentComponent } from '../join-student/join-student.component';

interface Student {
  name: string;
  school_id: string;
}

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
    IonModal,
    IonButton,
    JoinStudentComponent
  ],
})
export class ClassStudentsComponent {
  constructor() {
    addIcons({ add, trashOutline });
  }

  user = inject(UserService).getUser();
  role = this.user.role;

  isAddOpen = false;
  isRemoveOpen = false;

  students: Student[] = [
    { name: 'Randy Flores', school_id: 'SC0001' },
    { name: 'Randy Flores', school_id: 'SC0002' },
    { name: 'Randy Flores', school_id: 'SC0003' }
  ];

  selectedStudent: Student | null = null;

  openAddSub() {
    this.isAddOpen = true;
  }

  isSemesterActive = false;
  openRemoveModal(student: Student) {
    if(!this.isSemesterActive) return;
    this.selectedStudent = student;
    this.isRemoveOpen = true;
  }

  closeRemoveModal() {
    this.isRemoveOpen = false;
    this.selectedStudent = null;
  }

  
  confirmRemoveStudent() {
    if (!this.selectedStudent) return;

    const schoolId = this.selectedStudent.school_id;

    this.students = this.students.filter(
      student => student.school_id !== schoolId
    );

    this.closeRemoveModal();
  }
}
