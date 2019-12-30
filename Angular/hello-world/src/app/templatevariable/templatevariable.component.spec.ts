import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevariableComponent } from './templatevariable.component';

describe('TemplatevariableComponent', () => {
  let component: TemplatevariableComponent;
  let fixture: ComponentFixture<TemplatevariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatevariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
