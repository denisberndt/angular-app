import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // styles: [
  //   `
  //     .fa-star {
  //       color: green;
  //     }
  //   `
  // ]
})
export class FavoriteComponent {

  @Input('isFavorite') isFavorite = false; 
  @Output('change') change = new EventEmitter(); 

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}
