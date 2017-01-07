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
var core_1 = require("@angular/core");
var TinyEditor = (function () {
    function TinyEditor(elem) {
        this.onchange = new core_1.EventEmitter();
        this.elem = elem.nativeElement;
        tinymce.init({
            selector: 'textarea'
        });
    }
    TinyEditor.prototype.onInput = function () {
        this.onchange.emit(this.elem.value);
    };
    TinyEditor.prototype.init = function () {
        tinymce.init({
            selector: 'textarea'
        });
    };
    return TinyEditor;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TinyEditor.prototype, "onchange", void 0);
TinyEditor = __decorate([
    core_1.Directive({
        inputs: ['htmlEditor'],
        selector: '[htmlEditor]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TinyEditor);
exports.TinyEditor = TinyEditor;
//# sourceMappingURL=tiny.directive.js.map