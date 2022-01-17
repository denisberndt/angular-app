import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit() {
  //   // if we are sure that we will only use the component once, 
  //   // we can use this withoute the Observable ".subscribe" methode!
    
  //   // let id = this.route.snapshot.paramMap.get('id'); 

  //   this.route.paramMap
  //     .subscribe(params => {
  //       let id = params.get('id');
  //       console.log(id)
  //     })
  // }

  constructor (private router: Router) {}

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    })
  }

  ngOnInit(): void {
      
  }

}
