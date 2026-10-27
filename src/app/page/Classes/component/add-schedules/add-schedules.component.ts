
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonButton,
  IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, trashOutline } from 'ionicons/icons';

interface Schedule {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-add-schedules',
  templateUrl: './add-schedules.component.html',
  styleUrls: ['./add-schedules.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonModal,
    IonButton,
    IonIcon
  ]
})
export class AddSchedulesComponent {

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
  }

  private nextId = 2;

  schedules: Schedule[] = [
    {
      id: 1,
      day: '',
      startTime: '',
      endTime: ''
    }
  ];

  constructor() {
    addIcons({ addOutline, trashOutline });
  }

  addSchedule() {
    this.schedules.push({
      id: this.nextId++,
      day: '',
      startTime: '',
      endTime: ''
    });
  }

  removeSchedule(id: number) {
    if (this.schedules.length > 1) {
      this.schedules = this.schedules.filter(
        schedule => schedule.id !== id
      );
    }
  }

  saveSchedules() {
    if (this.schedules.some(schedule =>
      !schedule.day ||
      !schedule.startTime ||
      !schedule.endTime
    )) {
      alert('Please complete all schedule fields.');
      return;
    }

    if (this.schedules.some(schedule =>
      schedule.startTime >= schedule.endTime
    )) {
      alert('End time must be later than start time.');
      return;
    }

    // Example: check for overlapping schedules on the same day.
    for (let i = 0; i < this.schedules.length; i++) {
      for (let j = i + 1; j < this.schedules.length; j++) {
        const a = this.schedules[i];
        const b = this.schedules[j];

        if (
          a.day === b.day &&
          a.startTime < b.endTime &&
          b.startTime < a.endTime
        ) {
          alert(`Schedules overlap on ${a.day}.`);
          return;
        }
      }
    }

    console.log('Schedules to save:', this.schedules);

    // TODO: Send schedules to your service/API.
    this.isOpen = false;
  }
}
