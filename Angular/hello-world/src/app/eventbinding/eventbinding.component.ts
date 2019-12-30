import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
  <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
  </div>
  `
})
export class EventbindingComponent {

  // //Button click event-In browser we can see in console tab that this click event is fired and message displayed.
  // onSave() {
  //   console.log("Button was clicked.");
  // }

  // //Mouseover event-In browser we can see in console tab that this click event is fired and all mouse related events also displayed.
  // //So we have to pass $event a sparameter in function and print it in log.
  // onSave($event) {
  //   console.log("Button was clicked.",$event);
  // }



  // //////////////Event Bubbling/////////////
  // //We wrapped the button inside a div and in div we took a click event. Below we create a function for that click event which prints a message in console.
  // //Now when button clicked, we saw that total 3 events fired e.g: button click, mouse event and div click but we clicked only button than why 3 events fired?
  // //When an event is fired within an div element than all the DOM tree will be fired meaning button is present in div, so it'll bubble up till its parent node of DOM and this is called EVENT BUBBLING.
  // //So all events will be fired automatically.
  // onDivClicked() {
  //   console.log("Div clicked");
  // }
  // onSave($event) {
  //   console.log("Button was clicked.", $event);
  // }


  //How to stop Event Bubbling???
  //As below we called a method by we can stop Event Bubbling.
  onDivClicked() {
    console.log("Div clicked");
  }
  onSave($event) {
    $event.stopPropagation();//stop Event Bubbling
    console.log("Button was clicked.", $event);
  }

}
