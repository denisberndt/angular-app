import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.services';

@Injectable()
export class PostService extends DataService {
  
  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

}
