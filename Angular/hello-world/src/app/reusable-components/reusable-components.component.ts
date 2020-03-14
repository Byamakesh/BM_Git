// /////////////////Input Properties Start/////////////////////////
// Used Reusablecomponents
// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-reusable-components',
//   templateUrl: './reusable-components.component.html',
//   styleUrls: ['./reusable-components.component.css']
// })

// export class ReusableComponentsComponent implements OnInit {
//   @Input() isFavorite: boolean;
//   constructor() { }
//   ngOnInit() {
//   }

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//   }
// }
// /////////////////Input Properties End/////////////////////////


// /////////////////Aliasing Input Properties Start/////////////////////////
// import { Component, OnInit, Input } from '@angular/core';
// @Component({
//   selector: 'app-reusable-components',
//   templateUrl: './reusable-components.component.html',
//   styleUrls: ['./reusable-components.component.css']
// })

// export class ReusableComponentsComponent implements OnInit {
//   @Input('is-Favorite') isFavorite: boolean;//Aliasing input property, it is optional
//   constructor() { }

//   ngOnInit() {
//   }

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//   }
// }
// /////////////////Aliasing Input Properties End/////////////////////////

// /////////////////Output Properties Start/////////////////////////
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// @Component({
//   selector: 'app-reusable-components',
//   templateUrl: './reusable-components.component.html',
//   styleUrls: ['./reusable-components.component.css']
// })

// export class ReusableComponentsComponent implements OnInit {
//   @Input('is-Favorite') isFavorite: boolean;
//   @Output() change = new EventEmitter();//import

//   constructor() { }
//   ngOnInit() {
//   }

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//     this.change.emit();//Call emit() method
//   }
// }
// /////////////////Output Properties End/////////////////////////


// /////////////////Passing Event data Start/////////////////////////
// //When we supply value for change in emit() it will be available to all subscribers.
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-reusable-components',
//   templateUrl: './reusable-components.component.html',
//   styleUrls: ['./reusable-components.component.css']
// })

// export class ReusableComponentsComponent implements OnInit {
//   @Input('is-Favorite') isFavorite: boolean;
//   @Output('change') click = new EventEmitter();//Aliasing output property

//   constructor() { }
//   ngOnInit() {
//   }

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//     // this.change.emit(this.isFavorite);//Call emit() method, pass event data as parameter valuem, its a simple type value
//     this.click.emit({ newValue: this.isFavorite });//Supplied an object, complex type value
//   }
// }
// /////////////////Passing Event data End/////////////////////////


// /////////////////Aliasing Input Properties Start/////////////////////////
// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-reusable-components',
//   templateUrl: './reusable-components.component.html',
//   styleUrls: ['./reusable-components.component.css']
// })

// export class ReusableComponentsComponent implements OnInit {
//   @Input('is-Favorite') isFavorite: boolean;//Aliasing input property, it is optional
//   constructor() { }
//   ngOnInit() {
//   }

//   onClick() {
//     this.isFavorite = !this.isFavorite;
//   }
// }
// /////////////////Aliasing Input Properties End/////////////////////////


///////////////////View Encapsulation Start/////////////////////////
////Shadow DOM: Itis not supported by most browsers. Only Safari 10+, Chrome 53+ support this.
////In most cases we should use ViewEncapsulation.Emulated. So no need to bother about it & can be removed.

import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reusable-components',
  templateUrl: './reusable-components.component.html',
  styleUrls: ['./reusable-components.component.css'],
  // encapsulation:ViewEncapsulation.Emulated//It is default used to support shadow DOM which dos not leak the scope to outside world. It is Angulars own trick to support all browser.
  // encapsulation:ViewEncapsulation.Native//It is not working properly.
  // encapsulation:ViewEncapsulation.None//It will leake outside world so dont use this.
})

export class ReusableComponentsComponent {
  @Input('is-Favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}
///////////////////View Encapsulation End/////////////////////////
