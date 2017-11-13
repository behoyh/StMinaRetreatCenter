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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NewsletterService } from './NewsletterService'

export class Alerts {
    subject: string;
    body: string;
    type: string;
    startTime: string;
    endTime: string;
    //Active: boolean;
    image: Blob;
    url: string;
    targetAll: boolean;
}

var _activeAlerts: Alerts[] = [{ subject: "Test", body: "", type: "primary", startTime: "", endTime: "", image: new Blob(), url: "", targetAll: true }];
var _inActiveAlerts: Alerts[] = [{ subject: "Old Test", body: "", type: "default", startTime: "9/12/2017", endTime: "10/12/2017", image: new Blob(), url: "", targetAll: true }]

@Component({
    selector: 'alerts-app',
    templateUrl: 'app/templates/active-messages.html'
})

export class AppComponent implements OnInit {
    activeAlerts: Alerts[] = _activeAlerts;
    inActiveAlerts: Alerts[] = _inActiveAlerts;
    ngOnInit(): void {
        this.activeAlerts.push({ subject: "Test2", body: "", type: "danger", startTime: "", endTime: "", image: new Blob(), url: "", targetAll: true });
        this.activeAlerts.push({ subject: "Test3", body: "", type: "success", startTime: "", endTime: "", image: new Blob(), url: "", targetAll: true });

        this.inActiveAlerts.push({ subject: "Old Test2", body: "", type: "default", startTime: "10/12/2017", endTime: "11/09/2017", image: new Blob(), url: "", targetAll: true });
    }
}

