import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterCardsComponent } from './semester-cards.component';

describe('SemesterCardsComponent', () => {
  let component: SemesterCardsComponent;
  let fixture: ComponentFixture<SemesterCardsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
