import { CoursesService } from './courses.service';
import { DirectivesComponent } from './directives/directives.component';
import { CoursesComponents } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ServicesComponent } from './services/services.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';

@NgModule({
  declarations: [//all components goes here
    AppComponent,
    CoursesComponents,
    CourseComponent,
    DirectivesComponent,
    ServicesComponent,
    PropertyBindingComponent,
    BootstrapDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [//all services goes here
    CoursesService//Registered here the courses service in provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
