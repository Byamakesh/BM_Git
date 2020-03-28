import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'title',
    isFavorite: true
  }
  // onFavoriteChanged(isFavorite) {
  //   console.log("Favorite changed ", isFavorite);//display event value
  // }

  // Passing Event Data - complex type value: object
  onFavoriteChanged(eventArgs) {
    console.log("Favorite changed ", eventArgs);//display event value
  }

  //Assignment 4 - Likes Component
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
}
