import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardModalComponent } from './student-card-modal.component';

describe('StudentCardModalComponent', () => {
  let component: StudentCardModalComponent;
  let fixture: ComponentFixture<StudentCardModalComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
