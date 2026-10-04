import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-super-admin-layout',
  standalone: true,
  templateUrl: './super-admin-layout.component.html',
  styleUrls: ['./super-admin-layout.component.scss'],
  imports: [
    IonRouterOutlet
  ],
})
export class SuperAdminLayoutComponent {}
