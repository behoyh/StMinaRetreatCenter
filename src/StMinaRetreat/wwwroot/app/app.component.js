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
var PATHS = [{ path: "", name: "" }];
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
        this.selectedPath = false;
    };
    AppComponent.prototype.getNewsletters = function (path) {
        var _this = this;
        this.newsletterService.getNewsletters(path.path)
            .subscribe(function (path) { return _this.paths = path; }, function (error) { return _this.errorMessage = error; });
        this.selectedPath = true;
    };
    AppComponent.prototype.getNewsletter = function (path, id) {
        var _this = this;
        this.newsletterService.getNewsLetter(path.path)
            .subscribe(function (data) { return _this.downloadFile(data, id); }, function (error) { return _this.errorMessage = error; });
        this.selectedPath = true;
    };
    AppComponent.prototype.downloadFile = function (data, id) {
        var blob = new Blob([data], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, 'Newsletter.pdf');
        }
        else {
            window.open(url, "_blank");
        }
        this.selectedPath = true;
    };
    AppComponent.prototype.onSelect = function (path) {
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
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/view-newsletters.html'
    }),
    __metadata("design:paramtypes", [NewsletterService_1.NewsletterService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map