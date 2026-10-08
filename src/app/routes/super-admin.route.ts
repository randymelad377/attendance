import { Routes } from '@angular/router';

import { SuperAdminLayoutComponent } from '../layout/super-admin-layout/super-admin-layout.component';

import { HomeComponent } from '../page/Home/home/home.component';
import { SemesterComponent } from '../page/Semester/semester/semester.component';
import { SubjectComponent } from '../page/Subject/subject/subject.component';
import { ClassesComponent } from '../page/Classes/classes/classes.component';
import { StudentsComponent } from '../page/Students/students/students.component';
import { NotificationComponent } from '../page/Notification/notification/notification.component';
import { SectionComponent } from '../page/Section/section/section.component';

import { SpecClassComponent } from '../page/Classes/spec-class/spec-class.component';
import { ClassSessionsComponent } from '../page/Classes/component/class-sessions/class-sessions.component';
import { ClassSchedulesComponent } from '../page/Classes/component/class-schedules/class-schedules.component';
import { ClassStudentsComponent } from '../page/Classes/component/class-students/class-students.component';
import { ClassSummariesComponent } from '../page/Classes/component/class-summaries/class-summaries.component';
import { AttendanceComponent } from '../page/Classes/attendance/attendance.component';

export const superAdminRoutes: Routes = [
  {
    path: '',
    component: SuperAdminLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'semester',
        component: SemesterComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
      },
      {
        path: 'section',
        component: SectionComponent,
      },
      {
        path: 'classes',
        component: ClassesComponent
      },
      {
        path: 'attendance',
        component: AttendanceComponent
      },
      {
        path: 'class',
        component: SpecClassComponent,
        children: [
          {
            path: "sessions",
            component: ClassSessionsComponent
          },
          {
            path: "schedules",
            component: ClassSchedulesComponent
          },
          {
            path: "students",
            component: ClassStudentsComponent
          },
          {
            path: "summaries",
            component: ClassSummariesComponent
          },
        ]
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'notifications',
        component: NotificationComponent,
      },
    ],
  },
];
