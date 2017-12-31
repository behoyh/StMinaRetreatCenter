"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const NewsletterService_1 = require("./NewsletterService");
const app_view_news_component_1 = require("./app.view.news.component");
const app_component_2 = require("./app.component");
let AppModule = class AppModule {
    ngOnInit() { core_1.enableProdMode(); }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule],
        bootstrap: [app_component_1.AppComponent, app_view_news_component_1.ViewNewsComponent],
        providers: [NewsletterService_1.NewsletterService],
        declarations: [app_component_1.AppComponent, app_view_news_component_1.ViewNewsComponent, app_component_2.SafePipe]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map