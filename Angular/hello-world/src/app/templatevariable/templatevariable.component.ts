import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevariable',
  template: `
  <!--<input (keyup.enter)="onKeyUp($event)"/>-->

  <input #email (keyup.enter)="onKeyUp(email.value)"/>
  `
})
export class TemplatevariableComponent {

  // ////How to get input fields value????
  // //Traditional way
  // //Here target is a standard $event property which reference to input field.
  // onKeyUp($event) {
  //   console.log($event.target.value);
  // }


  //Using angular - #email(example) is a variable here and this called TEMPLATE VARIABLE.
  onKeyUp(email) {
    console.log(email);//so we read by email.value and supplied here to print
  }

}