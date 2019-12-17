import { CoursesService } from './courses.service';
import { DirectivesComponent } from './directives/directives.component';
import { CoursesComponents } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ServicesComponent } from './services/services.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    CourseComponent,
    DirectivesComponent,
    ServicesComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService//Registered here the courses service in provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
