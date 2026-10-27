import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/angular';
import { ClassCardsComponent } from '../component/class-cards/class-cards.component';

@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    ClassCardsComponent
  ],
})
export class MyClassesComponent {
  searchText = '';
  selectedSection = 'all';

  users = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Michael' },
    { name: 'Sarah' }
  ];

  filteredUsers = [...this.users];

  search() {
    const query = this.searchText.toLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(query)
    );
  }

  // Add year_level and onYearChange here
  year_level = '1rst_year';

  onYearChange(event: any) {
    this.year_level = event.detail.value;
  }

  role = "admin";
}