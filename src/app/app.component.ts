import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'hello world',
    isFavorit: true
  }

  onFavoriteChanged(eventArgs: any) {
    console.log("Favorite changed: ", eventArgs)
  }

  tweet = {
    body: 'Here is the body of tweet...',
    isLiked: true,
    likesCount: 0
  }
}
