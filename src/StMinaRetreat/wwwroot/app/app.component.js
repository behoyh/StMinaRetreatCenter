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
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="newsletterservice.ts" />
const core_1 = require("@angular/core");
require("rxjs/add/operator/map");
const NewsletterService_1 = require("./NewsletterService");
const core_2 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
class FilePath {
}
exports.FilePath = FilePath;
var PATHS = [{ path: "", name: "" }];
var NEWEST = { path: "", name: "" };
let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
SafePipe = __decorate([
    core_2.Pipe({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafePipe);
exports.SafePipe = SafePipe;
let AppComponent = class AppComponent {
    constructor(newsletterService) {
        this.newsletterService = newsletterService;
        this.title = 'Directory';
        this.newest = NEWEST;
        this.paths = PATHS;
        this.mode = 'Observable';
    }
    ngOnInit() {
        this.getNewsletterDirectories();
        this.newsletterService.getNewsletterDirectories()
            .subscribe(path => this.newestSearch(path), error => this.errorMessage = error);
    }
    getNewsletterDirectories() {
        this.newsletterService.getNewsletterDirectories()
            .subscribe(path => this.paths = path, error => this.errorMessage = error);
        this.selectedPath = false;
    }
    getNewsletters(path) {
        this.newsletterService.getNewsletters(path.path)
            .subscribe(path => this.paths = path, error => this.errorMessage = error);
        this.selectedPath = true;
    }
    getNewsletter(path, id) {
        this.newsletterService.getNewsLetter(path.path)
            .subscribe(data => this.downloadFile(data, id), error => this.errorMessage = error);
        this.selectedPath = true;
    }
    downloadFile(data, id) {
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
    onSelect(path) {
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
    newestSearch(path) {
        var trunPath = new FilePath();
        var newest = path.pop();
        trunPath.path = newest.path.split('\\').pop();
        debugger;
        this.newsletterService.getNewsletters(trunPath.path)
            .subscribe(path => this.newest = path.pop(), error => this.errorMessage = error);
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/templates/view-newsletters.html'
    }),
    __metadata("design:paramtypes", [NewsletterService_1.NewsletterService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map