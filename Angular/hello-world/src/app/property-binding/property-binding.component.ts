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

    <br><br>
    <h2>{{ title1 }}</h2>
    <br>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    `
  //In Example 1, src is a property and we are binding this to fields {{imgUrl}}. This is called property binding also known as interpolation.
  //In Example 2, src is a property is within square[] bracket and also binding the field with it.
  //There is no difference between Example 1 & Example 2. Both are correct but Example 2 is looks cleaner and shorter. So can be prefered to use.

  //In above example of Attribute Binding we used [attr.colspan] because we need to tell angular by using attr. that colspan is an attribute of HTML element e.g: <td> otherwise we'll get exception that it is unknow to DOM.
})
export class PropertyBindingComponent {

  title = "Property Binding";
  title1 = "Attribute Binding";
  imgUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
}
