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

var PATHS: FilePath[] = [];

@Component({
    selector: 'my-app',
    template: `
    <div *ngIf="selectedPath">
      <h2>{{selectedPath.path}}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li *ngFor="let path of paths" class="list-group-item" (click)="onSelect(path)">
        <a id={{path.path}} download="Newsletter.pdf" class="badge">{{path.path}}</a>
      </li>
    </ul>
  `
})

export class AppComponent implements OnInit {

    title = 'Directory';
    selectedPath: FilePath;

    paths = PATHS;

    errorMessage: string;

    mode = 'Observable';

    constructor(private newsletterService: NewsletterService) { }

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

    getNewsletter(path: FilePath, id: string) {
        this.newsletterService.getNewsLetter(path.path)
            .subscribe(data => this.downloadFile(data, id),
            error => this.errorMessage = <any>error);

    }

    downloadFile(data: Blob, id: string) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);

        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, 'Newsletter.pdf');
        }
        else {
            window.open(url, "_blank");
        }
    }

    onSelect(path: FilePath): void {
        var trunPath = new FilePath();


        this.selectedPath = path;

        var firstLevel = path.path.indexOf('wwwroot/Newsletters\\') !== -1;

        if (firstLevel) {
            trunPath.path = path.path.split('\\').pop();
            this.getNewsletters(trunPath);
        }
        else {
            trunPath.path = path.path.replace('wwwroot/Newsletters/', '').replace('\\', '/');
            this.getNewsletter(trunPath, path.path);
        }
    }


}

