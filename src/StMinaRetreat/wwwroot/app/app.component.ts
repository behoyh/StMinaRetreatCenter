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
    Component
} from '@angular/core';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NewsletterService } from './NewsletterService'

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

export class AppComponent implements OnInit {

    title = 'Directory';
    selectedPath: FilePath;

    paths = PATHS;

    onSelect(path: FilePath): void {
        this.selectedPath = path;

    }


    errorMessage: string;

    mode = 'Observable';

    constructor(private newsletterService: NewsletterService)
    {

    }

    ngOnInit() { this.getNewsletterDirectories(); }

    getNewsletterDirectories() {
        this.newsletterService.getNewsletterDirectories()
            .subscribe(
            path => this.paths = path,
            error => this.errorMessage = <any>error);
    }

    getNewsletters(path: FilePath) {
        this.newsletterService.getNewsletters(path.path)
            .subscribe(
            path => this.paths = path,
            error => this.errorMessage = <any>error);
    }

    getNewsletter(path: FilePath) {
        this.newsletterService.getNewsLetter(path.path)
            .subscribe(data => this.downloadFile(data.blob),
            error => this.errorMessage = <any>error);

    }

    downloadFile(data: () => Blob) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }

}

