import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSearchbar,
  IonList,
  IonItem,
  SegmentCustomEvent,
  IonSelectOption,
  IonSelect
} from '@ionic/angular';


import { FormsModule } from '@angular/forms';
import { ClassCardsComponent } from '../component/class-cards/class-cards.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  imports: [
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSearchbar,
  IonList,
    IonItem,
    FormsModule,
    ClassCardsComponent,
    IonSelectOption,
  IonSelect
],
})
export class ClassesComponent{
  
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
  
  //THIS IS FOR YEAR LEVEL
  year_level = "1rst_year";
  onYearChange(event: SegmentCustomEvent) {
    this.year_level = event.detail.value as string;
  }
  
  
}
