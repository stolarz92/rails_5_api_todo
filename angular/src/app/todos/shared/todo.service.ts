import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from "angular2-token";

import { Todo } from './todo';

@Injectable()
export class TodoService {
  private todoUrl = 'http://localhost:3000/todos.json';

  constructor(
    private http: Http,
    private _token_service: Angular2TokenService
  ) {}

  getTodos(): Observable<Todo[]> {
    return this._token_service.get('/todos')
                              .map((response: Response) => <Todo[]>response.json())
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
