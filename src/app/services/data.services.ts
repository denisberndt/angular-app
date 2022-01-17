import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable()
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(catchError(this.handleError));
  }

  create(resource: any) {
    // return throwError(new AppError(resource)); // to get error

    return this.http.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
    //     .pipe(catchError(this.handleError));

    return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  delete(id: string) {
    // return throwError(new AppError(id)); // to get error

    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if(error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError());
    
      
    // return Observable.caller(new AppError(error)); old version
    return throwError(new AppError(error));
  }
}
