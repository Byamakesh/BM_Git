import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2FavouriteComponentComponent } from './assignment2-favourite-component.component';

describe('Assignment2FavouriteComponentComponent', () => {
  let component: Assignment2FavouriteComponentComponent;
  let fixture: ComponentFixture<Assignment2FavouriteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment2FavouriteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment2FavouriteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
