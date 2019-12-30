import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventfilteringComponent } from './eventfiltering.component';

describe('EventfilteringComponent', () => {
  let component: EventfilteringComponent;
  let fixture: ComponentFixture<EventfilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventfilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventfilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
