import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button><br><br>
    <button [style.backgroundColor]="isActive?'blue':'white'">Style Binding</button>
  `
})
//In this example above we have used another class [class.active] and the value of this is as per our variable in class.
//Set it to true, then go to the browser and press F12, can see that we got total 3 classes and if it is false we'll get only 2.
//This is called Class Binding.
//Also we kept this class separately because we want btn btn-primary all time but this is set to as dynamically based on some condition.
export class BootstrapDemoComponent {
  isActive = false;

}
