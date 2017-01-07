"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="newsletterservice.ts" />
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var News = (function () {
    function News() {
    }
    return News;
}());
exports.News = News;
var NEWS = { title: "" };
var ViewNewsComponent = (function () {
    function ViewNewsComponent(http) {
        this.http = http;
        this.news = NEWS;
    }
    ViewNewsComponent.prototype.ngOnInit = function () { this.getNews(); };
    ViewNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.http.get('./api/SiteNews').subscribe(function (data) { return _this.news = data.json(); });
    };
    ViewNewsComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return ViewNewsComponent;
}());
ViewNewsComponent = __decorate([
    core_1.Component({
        selector: 'news-app',
        template: "\n        <h3 class=\"mbr-section-title display-2\">{{news.title}}</h3>\n        <small>By {{news.displayAuthorName}}, posted on {{news.dateTime}} </small>\n        <div class=\"col-md-8 col-md-offset-2 lead\">{{news.news}}</div>\n  "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ViewNewsComponent);
exports.ViewNewsComponent = ViewNewsComponent;
//# sourceMappingURL=app.view.news.component.js.map