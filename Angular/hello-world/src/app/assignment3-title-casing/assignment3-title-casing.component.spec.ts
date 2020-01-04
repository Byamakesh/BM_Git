import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3TitleCasingComponent } from './assignment3-title-casing.component';

describe('Assignment3TitleCasingComponent', () => {
  let component: Assignment3TitleCasingComponent;
  let fixture: ComponentFixture<Assignment3TitleCasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment3TitleCasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3TitleCasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
