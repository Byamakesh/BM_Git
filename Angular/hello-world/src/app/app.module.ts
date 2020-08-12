import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { CoursesComponents } from './courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Assignment3TitleCasingComponent } from './assignment3-title-casing/assignment3-title-casing.component';
import { TitleCasePipe } from './title-case.pipe';
import { ReusableComponentsComponent } from './reusable-components/reusable-components.component';
import { Assignment4LikeComponentComponent } from './assignment4-like-component/assignment4-like-component.component';
import { DirectivesComponentComponent } from './directives-component/directives-component.component';
import { InputFormatDirective } from './input-format.directive';
import { Assignment5ZippyComponent } from './assignment5-zippy/assignment5-zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Assignment6CourseFormComponent } from './assignment6-course-form/assignment6-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { Assignment7ChangePasswordFormComponent } from './assignment7-change-password-form/assignment7-change-password-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [//all components, pipes, directives goes here
    AppComponent,
    CoursesComponents,
    CourseComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
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
    Assignment3TitleCasingComponent,
    TitleCasePipe,
    ReusableComponentsComponent,
    Assignment4LikeComponentComponent,
    DirectivesComponentComponent,
    InputFormatDirective,
    Assignment5ZippyComponent,
    ContactFormComponent,
    Assignment6CourseFormComponent,
    SignupFormComponent,
    Assignment7ChangePasswordFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//required for ngModel
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [//all services goes here
    CoursesService//Registered here the courses service in provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
