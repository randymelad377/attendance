import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonRouterOutlet,

  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,


} from '@ionic/angular';

import { StudentLayoutComponent } from '../student-layout/student-layout.component';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { SuperAdminLayoutComponent } from '../super-admin-layout/super-admin-layout.component';

import { menuOutline } from 'ionicons/icons';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [
    IonMenuButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    
    IonRouterOutlet,

    
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,

    RouterLink,

    StudentLayoutComponent,
    AdminLayoutComponent,
    SuperAdminLayoutComponent,
    
    SidebarComponent
  ],
})
export class MainLayoutComponent {
  menuOutline = menuOutline;

  role = "super-admin";

}
