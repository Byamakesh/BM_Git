import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment4LikeComponentComponent } from './assignment4-like-component.component';

describe('Assignment4LikeComponentComponent', () => {
  let component: Assignment4LikeComponentComponent;
  let fixture: ComponentFixture<Assignment4LikeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment4LikeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment4LikeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
