import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecClassComponent } from './spec-class.component';

describe('SpecClassComponent', () => {
  let component: SpecClassComponent;
  let fixture: ComponentFixture<SpecClassComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
