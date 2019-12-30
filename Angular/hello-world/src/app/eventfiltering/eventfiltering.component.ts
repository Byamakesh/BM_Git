import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventfiltering',
  template: `
  <!--<input (keyup)="onKeyUp($event)"/>-->

  <input (keyup.enter)="onKeyUp()"/>
  `
})
export class EventfilteringComponent {

  // //Traditional way
  // onKeyUp($event) {
  //   if ($event.keyCode === 13) {
  //     console.log("Enter key pressed");
  //   }
  // }


  //Using angular - it is much cleaner
  onKeyUp() {
    console.log("Enter key pressed");
  }
}
