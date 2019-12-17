////Component creation

///2-In order to convert below class as component, add metedata/library that angular understand
import { Component } from '@angular/core';

///3-Add decorator to class
@Component({
    selector: 'courses',
    // template: '<h2>{{title}}</h2>'
    // template: '<h2>{{"Title: "+title}}</h2>'//append string with value
    template: '<h2>{{ getTitle() }}</h2>'//call method. These syntax of binding data dynamically by using {{ }} called as STRING INTERPOLATION.
})

///1-Create class
export class CoursesComponents {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
}