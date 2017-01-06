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
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class News {
    title: string;
}

var NEWS: News = { title: "" };

@Component({
    selector: 'write-news',
    template: `
      <input type="text" value="{{news.title}}">
<button (click)="setNews()">Submit</button>
  `
})

export class WriteNewsComponent implements OnInit {
    ngOnInit() { this.getNews(); }

    constructor(private http: Http) { }

    news = NEWS;

    getNews() {
        this.http.get('./app/site-news.json').subscribe(data => this.news = data.json() as News);
    }

    setNews() {
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

