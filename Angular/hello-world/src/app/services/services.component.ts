////Services - Dependency Injection


import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'services',
  template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})
export class ServicesComponent {

  title = "List of courses";

  courses;

  // constructor() {
  //   let service = new CoursesService();//Here we have created an object. But the problem is it is tightly coupled to this class means unit test is very difficult. Also if service needs parameter later than we have to change everywhere.
  //   this.courses = service.getCourses();
  // }


  ////Solve above problem by Dependency Injection - Create an object within constructor and pass to it as parameter or dependency of the class.
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    //Here angular will automatically create object. UT also be easier as loosely coupled.
    //Now register CoursesService as a provider in our module.
    ///When angular is going to create an instance of this component,first it will instantiate its dependencies and then it will inject those dependencies into the constructor of this class and this is what we call dependency injection.
  }
}