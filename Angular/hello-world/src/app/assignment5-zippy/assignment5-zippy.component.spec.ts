import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment5ZippyComponent } from './assignment5-zippy.component';

describe('Assignment5ZippyComponent', () => {
  let component: Assignment5ZippyComponent;
  let fixture: ComponentFixture<Assignment5ZippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment5ZippyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment5ZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
