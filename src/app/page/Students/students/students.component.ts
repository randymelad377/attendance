
import { Component, inject } from '@angular/core';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonSegment,
  IonLabel,
  IonSegmentButton,
  SegmentCustomEvent,
  IonSearchbar,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption
} from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import {StudentCardsComponent} from '../components/student-cards/student-cards.component';
import {AddStudentComponent} from '../components/add-student/add-student.component';
import { UserService } from '../../../services/user-service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonSegment,
  IonLabel,
  IonSegmentButton,
  IonSearchbar,
  IonList,
  FormsModule,
  IonItem,
  StudentCardsComponent,
  IonSelect,
  IonSelectOption,
  AddStudentComponent
]
})
export class StudentsComponent {
  //FOR SEARCH BAR
  searchText = '';
  selectedSection = 'all';

  users = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Michael' },
    { name: 'Sarah' }
  ];

  filteredUsers = this.users;

  search() {
    const query = this.searchText.toLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(query)
    );
  }

  //FOR YEAR LEVEL
  year_level = "1rst_year";
  onYearChange(event: SegmentCustomEvent) {
    this.year_level = event.detail.value as string;
  }

  isAddOpen = false;
  openAddSub() {
    this.isAddOpen = true;
  }

  user = inject(UserService).getUser();
  role = this.user.role;


}
