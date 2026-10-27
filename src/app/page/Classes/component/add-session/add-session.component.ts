
import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonButton,
  IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { timeOutline } from 'ionicons/icons';

export interface ClassSchedule {
  day: string;
  start_time: string;
  end_time: string;
}

export interface NewSession {
  date: string;
  schedule: ClassSchedule;
}

@Component({
  selector: 'app-add-session',
  standalone: true,
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss'],
  imports: [
    FormsModule,
    IonModal,
    IonButton,
    IonIcon,
    TitleCasePipe
  ]
})
export class AddSessionComponent {
  @Input() isOpen = false;
  @Input() schedules: ClassSchedule[] = [];

  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<NewSession>();

  sessionDate = this.getTodayDate();

  private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
  
  selectedScheduleIndex: number | null = null;

  constructor() {
    addIcons({ timeOutline });
  }

  saveSession() {
    if (
      !this.sessionDate ||
      this.selectedScheduleIndex === null
    ) {
      return;
    }

    const schedule = this.schedules[this.selectedScheduleIndex];

    if (!schedule) {
      return;
    }

    this.saved.emit({
      date: this.sessionDate,
      schedule: { ...schedule }
    });

    this.resetForm();
    this.isOpen = false;
    this.closed.emit();
  }

  closeModal() {
    this.isOpen = false;
    this.closed.emit();
  }

  private resetForm() {
    this.sessionDate = '';
    this.selectedScheduleIndex = null;
  }
}
