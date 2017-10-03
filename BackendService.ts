import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'

@Injectable()
export class BackendServicec {

    protected resource: string;
    protected headers = new Headers({ 'Content-Type': 'application/json' });
    protected options = new RequestOptions({ headers: this.headers });
    protected http: Http;

    private timeout = 5000;

    constructor() { }

    doRequest(callbackRequest: any, timeout?: number): Observable<Response> {

        const tmpTimeout: number = timeout || this.timeout;

        return callbackRequest
            .timeout(tmpTimeout)
            .map(res => res.json());
    }

    postData(url: string, data: any, timeout?: number): Observable<Response> {
        const callbackRequest = this.http.post(url, data, this.options);
        return this.doRequest(callbackRequest, timeout);
    }

    getData(url: string, timeout?: number): Observable<Response> {
        const callbackRequest = this.http.get(url, this.options)
        return this.doRequest(callbackRequest, timeout);
    }

    patchData(url: string, data: any, timeout?: number): Observable<Response> {
        const callbackRequest = this.http.patch(url, data, this.options);
        return this.doRequest(callbackRequest, timeout);
    }

    deleteData(url: string, timeout?: number): Observable<Response> {
        const callbackRequest = this.http.delete(url, this.options)
        return this.doRequest(callbackRequest, timeout);
    }

    putData(url: string, data: any, timeout?: number): Observable<Response> {
        const callbackRequest = this.http.put(url, data, this.options);
        return this.doRequest(callbackRequest, timeout);
    }
}