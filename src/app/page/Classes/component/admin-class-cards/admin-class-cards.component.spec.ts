import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassCardsComponent } from './admin-class-cards.component';

describe('AdminClassCardsComponent', () => {
  let component: AdminClassCardsComponent;
  let fixture: ComponentFixture<AdminClassCardsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
