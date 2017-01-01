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
require("rxjs/add/operator/map");
var NewsletterService_1 = require("./NewsletterService");
var FilePath = (function () {
    function FilePath() {
    }
    return FilePath;
}());
exports.FilePath = FilePath;
var PATHS = [
    { path: 'Sample Path' }
];
var AppComponent = (function () {
    function AppComponent(newsletterService) {
        this.newsletterService = newsletterService;
        this.title = 'Directory';
        this.paths = PATHS;
        this.mode = 'Observable';
    }
    AppComponent.prototype.ngOnInit = function () { this.getNewsletterDirectories(); };
    AppComponent.prototype.getNewsletterDirectories = function () {
        var _this = this;
        this.newsletterService.getNewsletterDirectories()
            .subscribe(function (path) { return _this.paths = path; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.getNewsletters = function (path) {
        var _this = this;
        this.newsletterService.getNewsletters(path.path)
            .subscribe(function (path) { return _this.paths = path; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.getNewsletter = function (path) {
        var _this = this;
        this.newsletterService.getNewsLetter(path.path)
            .subscribe(function (data) { return _this.downloadFile(data.blob); }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    AppComponent.prototype.onSelect = function (path) {
        this.selectedPath = path;
        debugger;
        path.path = path.path.replace('wwwroot/', '');
        this.getNewsletters(path);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div *ngIf=\"selectedPath\">\n      <h2>{{selectedPath.path}}</h2>\n    </div>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let path of paths\"\n        [class.selected]=\"path === selectedPath\"\n        (click)=\"onSelect(path)\">\n        <span class=\"badge\">{{path.path}}</span>\n      </li>\n    </ul>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [NewsletterService_1.NewsletterService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map