import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { menuOutline } from 'ionicons/icons';

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

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
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
  ],
})
export class SidebarComponent{
    menuOutline = menuOutline;

    role = "super-admin";
}
