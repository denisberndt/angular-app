import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
   

  @Input('isLiked') isLiked = false; 
  @Input('likesCount') likesCount = 0;
  // @Output('change1') change1 = new EventEmitter(); 

  onClick() {
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? -1 : 1;
    // this.change1.emit({newValue1: this.isLiked, newValue2: this.likesCount});
    
  }

}
