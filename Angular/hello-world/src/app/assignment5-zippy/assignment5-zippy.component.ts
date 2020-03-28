import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment5-zippy',
  templateUrl: './assignment5-zippy.component.html',
  styleUrls: ['./assignment5-zippy.component.css']
})
export class Assignment5ZippyComponent {
  @Input('title') title: string;

  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
