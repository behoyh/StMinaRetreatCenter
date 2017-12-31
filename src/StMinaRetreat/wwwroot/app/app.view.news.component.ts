/// <reference path="newsletterservice.ts" />
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
    Component,
    Pipe
} from '@angular/core';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AppComponent, FilePath } from './app.component';
import { DomSanitizer } from '@angular/platform-browser';
export class News {
    title: string;
}

var NEWS: News = { title: "" };

@Pipe({ name: 'safeHtml' })
export class Safe {
    constructor(private sanitizer: DomSanitizer) { }

    transform(style: any) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    }
}

@Component({
    selector: 'news-app',
    templateUrl: 'app/templates/view-news.html'
})

export class ViewNewsComponent implements OnInit {
    ngOnInit() { this.getNews(); }

    constructor(private http: Http) { }

    news = NEWS;

    getNews() {
        this.http.get('./api/SiteNews').subscribe(data => this.news = data.json() as News);
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

