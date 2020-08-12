import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  constructor(hzttp: Http) {
    hzttp.get('http://jsonplaceholder.typicode.com/posts/')
      .subscribe(response => {
        console.log(response);
      });
  }


}
