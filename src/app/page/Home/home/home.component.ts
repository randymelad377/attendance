import { Component, OnInit } from '@angular/core';
import { OverviewComponent } from '../component/overview/overview.component';
import { ActionComponent } from '../component/action/action.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    OverviewComponent,
    ActionComponent
  ],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
