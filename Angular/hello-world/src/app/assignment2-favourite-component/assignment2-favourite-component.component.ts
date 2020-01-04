import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assignment2-favourite-component',
  templateUrl: './assignment2-favourite-component.component.html',
  styleUrls: ['./assignment2-favourite-component.component.css']
})
export class Assignment2FavouriteComponentComponent implements OnInit {

  isFavourite: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
