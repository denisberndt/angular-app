import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(html: HttpClient) { 
    super('https://api.github.com/users/mosh-hamedani/followers', html)
  }
}
