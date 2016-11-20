import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Item } from './Item';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class SampleService {
    private sampleUrl = './api/sample';  // URL to web API
    constructor(private http: Http) { }
    getItems(): Observable<Item[]> {
        return this.http.get(this.sampleUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleError(error: Response | any) {
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