import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    Component
} from '@angular/core';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AppComponent, FilePath } from './app.component';

@Injectable()
export class NewsletterService {

    constructor(private http: Http) { }

    getNewsletterDirectories(): Observable<FilePath[]> {
        return this.http.get('api/Newsletters')
            .map((r: Response) => r.json() as FilePath)
            .catch(this.handleError);
    }

    getNewsletters(path: string): Observable<FilePath[]> {
        return this.http.get(path)
            .map((r: Response) => r.json() as FilePath)
            .catch(this.handleError);
    }

    getNewsLetter(path: string) {
        return this.http.get(path);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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