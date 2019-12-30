import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  {{course.title | uppercase}}<br/>
  {{course.author | lowercase}}<br/>
  {{course.student | number}}<br/>  <!--Decimal-->
  {{course.rating | number:'2.1-1'}}<br/> <!--Here 2 is before decimal and 1-1 is after decimal min 1 & max 1-->
  {{course.price | currency:'INR'}}<br/>  <!--default is USD $-->
  {{course.releaseDate | date:'shortDate'}}
  <hr/>
  <h3>Custom Pipe</h3>
  {{text | summary:10}} <!--CustomPipe. we supplied parameter, also could be sent more parameter-->
  `
})

//////////Pipes/////////////
//Pipes are of 6 types: Uppercase, Lowercase, Decimal, Currency, Date and Custompipe.
//For more Date type: visit www.angular.io  and search datepipe.
export class PipesComponent {

  course = {
    title: "The complete Angular course",
    author: "Mosh Hamedani",
    rating: 4.9745,
    student: 32009,
    price: 436,
    releaseDate: new Date(2016, 3, 1)
  }

  text = "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.";

}
