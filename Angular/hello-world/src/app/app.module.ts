import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { DirectivesComponent } from './directives/directives.component';
import { CoursesComponents } from './courses.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ServicesComponent } from './services/services.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventfilteringComponent } from './eventfiltering/eventfiltering.component';
import { TemplatevariableComponent } from './templatevariable/templatevariable.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PipesComponent } from './pipes/pipes.component';
import { Assignment2FavouriteComponentComponent } from './assignment2-favourite-component/assignment2-favourite-component.component';
import { ComponentAPIComponent } from './component-api/component-api.component';
import { Assignment3TitleCasingComponent } from './assignment3-title-casing/assignment3-title-casing.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [//all components, pipes goes here
    AppComponent,
    CoursesComponents,
    CourseComponent,
    DirectivesComponent,
    ServicesComponent,
    PropertyBindingComponent,
    BootstrapDemoComponent,
    EventbindingComponent,
    EventfilteringComponent,
    TemplatevariableComponent,
    TwowaybindingComponent,
    PipesComponent,
    SummaryPipe,
    Assignment2FavouriteComponentComponent,
    ComponentAPIComponent,
    Assignment3TitleCasingComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule//required for ngModel
  ],
  providers: [//all services goes here
    CoursesService//Registered here the courses service in provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
