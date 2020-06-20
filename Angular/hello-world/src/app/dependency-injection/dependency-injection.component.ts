import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  template: `
  <h2> {{title}} </h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>
  `
})
export class DependencyInjectionComponent {
  title = "List of courses";
  courses;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}

/*Here to use dependency injection:
  Pass CoursesService as parameter to constructor or add as a dependency of this class.
  Next is register as provider in app.module.ts.
  With this implementation, when angular is going to creating an instance of this component,
  first it'll instantiate its dependencies and then it'll inject those dependencies into the
  constructor of this class. So this is called as DEPENDENCY INJECTION.*/