"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="newsletterservice.ts" />
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Alerts = /** @class */ (function () {
    function Alerts() {
    }
    return Alerts;
}());
exports.Alerts = Alerts;
var _activeAlerts = [{ subject: "Test", body: "", type: "primary", startTime: "", endTime: "", image: new Blob(), url: "", targetAll: true }];
var _inActiveAlerts = [{ subject: "Old Test", body: "", type: "default", startTime: "9/12/2017", endTime: "10/12/2017", image: new Blob(), url: "", targetAll: true }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.activeAlerts = _activeAlerts;
        this.inActiveAlerts = _inActiveAlerts;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.activeAlerts.push({ subject: "Test2", body: "", type: "danger", startTime: "", endTime: "", image: new Blob(), url: "", targetAll: true });
        this.activeAlerts.push({ subject: "Test3", body: "", type: "success", startTime: "", endTime: "", image: new Blob(), url: "", targetAll: true });
        this.inActiveAlerts.push({ subject: "Old Test2", body: "", type: "default", startTime: "10/12/2017", endTime: "11/09/2017", image: new Blob(), url: "", targetAll: true });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'alerts-app',
            templateUrl: 'app/templates/active-messages.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map