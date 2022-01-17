import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
// import icons from glyphicon

@Component({
    selector: 'courses', // <courses>
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <h1>{{email | titleCase1 }}</h1> 

    `
})

export class CoursesComponent {
    email = ""
    

    onKeyUp() {
        console.log(this.email);
    }

}
