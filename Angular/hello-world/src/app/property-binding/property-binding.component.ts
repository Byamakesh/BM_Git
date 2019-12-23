import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'properties',
  template: `
    <h2>{{ title }}</h2>

    Example 1
    <br>
    <img src="{{imgUrl}}"/>
    
    <br><br>
    Example 2
    <br>
    <img [src]="imgUrl"/>
    `
  //In Example 1, src is a property and we are binding this to fields {{imgUrl}}. This is called property binding also known as interpolation.
  //In Example 2, src is a property is within square[] bracket and also binding the field with it.
  //There is no difference between Example 1 & Example 2. Both are correct but Example 2 is looks cleaner and shorter. So can be prefered to use.
})
export class PropertyBindingComponent {

  title = "List of courses";
  imgUrl = "http://lorempixel.com/400/200";
}
