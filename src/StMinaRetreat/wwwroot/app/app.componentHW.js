"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var HwComponent = (function (_super) {
    __extends(HwComponent, _super);
    function HwComponent(_service) {
        var _this = this;
        _super.call(this);
        this._service = _service;
        this.persons = [];
        this.subscription = _service.RegenerateData$.subscribe(function (mission) {
            console.log("Good !! ", mission);
            _this.Refresh();
        });
    }
    HwComponent.prototype.Refresh = function () {
        var _this = this;
        this._service.loadData().then(function (data) {
            _this.persons = data;
        });
    };
    HwComponent.prototype.ngOnInit = function () {
        this.Refresh();
    };
    HwComponent.prototype.onUpdate = function (elem) {
        console.log(elem);
        this._service.Update(elem).then(function (data) {
        });
    };
    HwComponent.prototype.onDelete = function (elem) {
        var _this = this;
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(function (data) {
            _this.Refresh();
        });
    };
    HwComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    HwComponent = __decorate([
        core_1.Component({
            selector: 'myhw',
            template: "\n      <div class='row'>\n        <pform></pform>\n      </div>\n      <div class='row'>\n       <div class=\"panel panel-default\">\n        <!-- Default panel contents -->\n        <div class='panel-heading'>Products List</div>\n        <div class='panel-body'>\n          <table class='table table-condensed'>\n            <thead>\n              <th>Id</th>\n              <th>Name</th>\n              <th>Description</th>\n                <th></th>\n            </thead>\n             <tbody>\n              <tr *ngFor=\"let person of persons\"  >\n                  <td> {{person.id}}  </td>\n                  <td> <input type=\"text\"  [(ngModel)]=\"person.name\" name=\"pname\" class=\"form-control\" /> </td>\n                  <td> <input type=\"text\"  [(ngModel)]=\"person.description\" name=\"pdescription\"  class=\"form-control\" /> </td>\n                  <td> <input type=\"button\" value=\"update\" class=\"btn btn-default\"  (click)=\"onUpdate(person)\"/> <input type=\"button\" value=\"remove\" class=\"btn btn-danger\"  (click)=\"onDelete(person.id)\"/></td>\n                </tr> \n            <tbody>\n           </table>\n           </div>\n           </div>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], HwComponent);
    return HwComponent;
}(core_1.OnInit));
exports.HwComponent = HwComponent;
//# sourceMappingURL=app.componentHW.js.map