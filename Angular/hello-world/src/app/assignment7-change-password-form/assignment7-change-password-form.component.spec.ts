import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment7ChangePasswordFormComponent } from './assignment7-change-password-form.component';

describe('Assignment7ChangePasswordFormComponent', () => {
  let component: Assignment7ChangePasswordFormComponent;
  let fixture: ComponentFixture<Assignment7ChangePasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment7ChangePasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment7ChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
