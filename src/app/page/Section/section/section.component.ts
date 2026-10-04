import { Component, OnInit } from '@angular/core';

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

import { FormsModule } from '@angular/forms';
import { SectionCardsComponent } from '../components/section-cards/section-cards.component';
import { AddSectionComponent } from '../components/add-section/add-section.component';
import { SectionModalComponent } from '../components/section-modal/section-modal.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
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
    SectionCardsComponent,
    AddSectionComponent,
  SectionModalComponent
],
})
export class SectionComponent {

  //FOR AVAILABLE OR ARCHIVE
  status = 'available';
  onStatusChange(event: SegmentCustomEvent) {
    this.status = event.detail.value as string;
  }

  //FOR SEARCH BAR
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

  
  //FOR YEAR LEVEL
  year_level = "1rst_year";
  onYearChange(event: SegmentCustomEvent) {
    this.year_level = event.detail.value as string;
  }

  
  //FOR MODALS
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  isAddOpen = false;
  openAddSub() {
    this.isAddOpen = true;
  }


}
