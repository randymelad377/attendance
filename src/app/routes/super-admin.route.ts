import { Routes } from '@angular/router';

import { SuperAdminLayoutComponent } from '../layout/super-admin-layout/super-admin-layout.component';

import { HomeComponent } from '../page/Home/home/home.component';
import { SemesterComponent } from '../page/Semester/semester/semester.component';
import { SubjectComponent } from '../page/Subject/subject/subject.component';
import { SectionComponent } from '../page/Section/section/section.component';
import { ClassesComponent } from '../page/Classes/classes/classes.component';
import { StudentsComponent } from '../page/Students/students/students.component';
import { NotificationComponent } from '../page/Notification/notification/notification.component';

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
        component: ClassesComponent,
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
