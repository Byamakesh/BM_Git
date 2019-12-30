import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})
export class TwowaybindingComponent {
  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }

}
