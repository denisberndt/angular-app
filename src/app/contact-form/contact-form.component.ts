import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
  contactMethods = [
      {id: 1, name: 'Development'},
      {id: 2, name: 'Art'},
      {id: 3, name: 'Languages'}
  ];

  log(x: any) { console.log(x); }

  submit(f: any) { }
}
