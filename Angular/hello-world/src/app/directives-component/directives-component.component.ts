import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent {
  /////ngSwitchCase/////
  // viewMode = 'map';//set initial value


  /////ngFor/////
  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' }
  // ];


  /////ngFor and Change Detection/////
  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' }
  // ];
  // onAdd() {
  //   this.courses.push({ id: 4, name: "course4" });
  // }


  // onRemove(course) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onUpdate(course) {
  //   course.name = "Updated";
  // }


  /////ngFor and Trackby/////
  ///Example 1
  courses;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }

  ///Example 2
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  ///ngStyle
  canSave = true;

  /// Safe Traversal Operator
  // task = {
  //   title: 'Review applications',
  //   assignee: {
  //     name: 'Byamakesh Mohapatra'
  //   }
  // }

  /// If assignee is null
  task = {
    title: 'Review applications',
    assignee: null
  }
}
