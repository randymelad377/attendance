import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSummariesComponent } from './class-summaries.component';

describe('ClassSummariesComponent', () => {
  let component: ClassSummariesComponent;
  let fixture: ComponentFixture<ClassSummariesComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
