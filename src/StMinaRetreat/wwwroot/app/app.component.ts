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
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export class FilePath {
    path: string;
    name: string;
}

var PATHS: FilePath[] = [{ path: "", name: "" }];

var NEWEST: FilePath = { path: "", name: "" };

@Pipe({ name: 'safeHtml' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(html: string) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
} 

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/view-newsletters.html'
})

export class AppComponent implements OnInit {

    title = 'Directory';
    selectedPath: boolean;

    newest = NEWEST;

    paths = PATHS;

    errorMessage: string;

    mode = 'Observable';

    constructor(private newsletterService: NewsletterService) { }

    ngOnInit() {

        this.getNewsletterDirectories();

        this.newsletterService.getNewsletterDirectories()
            .subscribe(
            path => this.newestSearch(path),
            error => this.errorMessage = <any>error);

    }

    getNewsletterDirectories() {
        this.newsletterService.getNewsletterDirectories()
            .subscribe(
            path => this.paths = path,
            error => this.errorMessage = <any>error);
        this.selectedPath = false;
    }

    getNewsletters(path: FilePath) {
        this.newsletterService.getNewsletters(path.path)
            .subscribe(
            path => this.paths = path,
            error => this.errorMessage = <any>error);
        this.selectedPath = true;
    }

    getNewsletter(path: FilePath, id: string) {
        this.newsletterService.getNewsLetter(path.path)
            .subscribe(data => this.downloadFile(data, id),
            error => this.errorMessage = <any>error);
        this.selectedPath = true;

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
        this.selectedPath = true;
    }

    onSelect(path: FilePath): void {
        var trunPath = new FilePath();

        var firstLevel = path.path.indexOf('Newsletters\\') !== -1;

        if (firstLevel) {
            trunPath.path = path.path.split('\\').pop();
            this.getNewsletters(trunPath);
        }
        else {
            trunPath.path = path.path.replace('Newsletters/', '').replace('\\', '/');
            this.getNewsletter(trunPath, path.path);
        }
    }

    newestSearch(path: FilePath[])
    {
        var trunPath = new FilePath();

        var newest = path.pop();
        trunPath.path = newest.path.split('\\').pop();
        debugger;
        this.newsletterService.getNewsletters(trunPath.path)
            .subscribe(
            path => this.newest = path.pop(),
            error => this.errorMessage = <any>error);
    }

}

