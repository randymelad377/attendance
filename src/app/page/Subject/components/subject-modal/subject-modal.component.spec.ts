import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectModalComponent } from './subject-modal.component';

describe('SubjectModalComponent', () => {
  let component: SubjectModalComponent;
  let fixture: ComponentFixture<SubjectModalComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
