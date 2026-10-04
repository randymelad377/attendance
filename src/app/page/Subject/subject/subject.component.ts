import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  IonItem
} from '@ionic/angular';
import { SubjectCardsComponent } from '../components/subject-cards/subject-cards.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
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
  IonItem,
  FormsModule,
  SubjectCardsComponent,
],
})
export class SubjectComponent {

  status = 'available';

  onStatusChange(event: SegmentCustomEvent) {
    this.status = event.detail.value as string;
  }

  searchText = '';

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

  year_level = "1rst_year";
  onYearChange(event: SegmentCustomEvent) {
    this.year_level = event.detail.value as string;
  }

}
