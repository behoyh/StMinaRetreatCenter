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
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class FilePath {
    path: string;
}

var PATHS: FilePath[] = [
    { path: 'Sample Path' }
];

@Component({
    selector: 'my-app',
    template: `
    <ul class="heroes">
      <li *ngFor="let path of paths"
        [class.selected]="path === selectedPath"
        (click)="onSelect(path)">
        <span class="badge">{{path.path}}</span>
      </li>
    </ul>
    <div *ngIf="selectedPath">
      <h2>{{selectedPath.path}}</h2>
      <div><label>file: </label>{{selectedPath.path}}</div>
    </div>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
    title = 'Directory';
    selectedPath: FilePath;

    paths = PATHS;

    onSelect(path: FilePath): void {
        this.selectedPath = path;
    }
}

export class HeroListComponent implements OnInit {
    errorMessage: string;
    paths: FilePath[];
    mode = 'Observable';

    constructor(private heroService: NewsletterService) { }

    ngOnInit() { this.getNewsletterDirectories(); }

    getNewsletterDirectories() {
        this.heroService.getNewsletterDirectories()
            .subscribe(
            path => this.paths = PATHS,
            error => this.errorMessage = <any>error);
    }

}

@Injectable()
export class NewsletterService {
    private dUrl = 'api/Newsletters';  // URL to web API

    constructor(private http: Http) { }

    getNewsletterDirectories(): Observable<FilePath[]> {
        return this.http.get(this.dUrl)
            .map((r: Response) => r.json() as FilePath)
            .catch(this.handleError);
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