import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment4-like-component',
  templateUrl: './assignment4-like-component.component.html',
  styleUrls: ['./assignment4-like-component.component.css']
})
export class Assignment4LikeComponentComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;//Likes count update on click
    this.isActive = !this.isActive;
  }
}
