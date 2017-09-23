import { Injector, Injectable } from '@angular/core';
import { RequestMethod, Http } from '@angular/http';
import { Resource, ResourceAction, ResourceMethod, ResourceParams, ResourceCRUD } from 'ngx-resource';
import { Observable, Subscriber } from 'rxjs';
import { Request, Response } from '@angular/http';
import { Router } from "@angular/router";

@Injectable()
@ResourceParams({
    url: '/'
})
export class AppResource extends Resource {
    constructor(
        http: Http
    ) {
        super(http);
    }
    getParams(): any {
        let params = super.$getParams();
        params.timenow = new Date().getTime();
        return params;
    }
    getHeaders(): any {
        let headers = {
            'Content-Type': 'application/json',
            'access-token': localStorage.getItem('accessToken'),
            'uid': localStorage.getItem('uid'),
            'client': localStorage.getItem('client'),
            'expiry': localStorage.getItem('expiry')
        }
        return headers;
    }

    responseInterceptor(observable: Observable<any>, request?: Request): Observable<any> {

        return Observable.create((subscriber: Subscriber<any>) => {

            observable.subscribe(
                (res: Response) => {
                    if (res.headers) {
                        let newToken: string = res.headers.get('access-token');
                        let expiry: string = res.headers.get('access-token');
                        if (newToken) {
                            localStorage.setItem('accessToken', newToken);
                        }
                    }
                    subscriber.next((<any>res)._body ? res.json() : null);
                },
                (error: Response) => {
                    if (error.status === 401) {
                        localStorage.setItem('accessToken', null);
                    }
                    console.warn('BaseResource request error', error, request);
                    subscriber.error(error);
                },
                () => subscriber.complete()
            );
        });
    }

}
