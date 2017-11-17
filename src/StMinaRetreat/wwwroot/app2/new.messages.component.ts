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
    Directive,
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

export class News {
    title: string;
    news: string;
}

var NEWS: News = { title: "", news: "" };

@Component({
    selector: 'write-news',
    templateUrl: './app2/components/templates/write-news.html'
})

export class WriteMessagesComponent implements OnInit {
    ngOnInit() { }

    constructor(private http: Http) { }

    news = NEWS;

    getNews() {
        this.http.get('./api/SiteNews').subscribe(data => this.news = data.json() as News);
    }

    setNews() {
        debugger;
        this.http.post('./api/SiteNews', this.news).subscribe(res => this.getNews());
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

