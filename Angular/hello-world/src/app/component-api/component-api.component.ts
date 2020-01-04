import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css']
})
export class ComponentAPIComponent implements OnInit {

  isFavourite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

}
