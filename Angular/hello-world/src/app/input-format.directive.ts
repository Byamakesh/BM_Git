//////Example 1:
// //This is Custom directives example
// //HostListener directives allows us to subscribe the events raised by DOM
// import { Directive, HostListener, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appInputFormat]'
// })
// export class InputFormatDirective {
//   //ElementRef: This gives us to access to the DOM object
//   constructor(private el: ElementRef) { }

//   // @HostListener('focus') onFocus() {
//   //   console.log("On Focus");
//   // }
//   @HostListener('blur') onBlur() {
//     let value: string = this.el.nativeElement.value;
//     this.el.nativeElement.value = value.toLowerCase();
//   }



//////Example 2 : Use selector as attribute binding
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;//Input field with aliase

  //ElementRef: This gives us to access to the DOM object
  constructor(private el: ElementRef) { }

  // @HostListener('focus') onFocus() {
  //   console.log("On Focus");
  // }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
