import {
    OnInit,
    Directive,
    HostListener, Output, EventEmitter, ElementRef
} from '@angular/core';

declare var tinymce: any;

@Directive({
    inputs: ['htmlEditor'],
    selector: '[htmlEditor]',
})


export class TinyEditor {

    private elem: any;

    @Output() onchange = new EventEmitter();

    onInput() {
        this.onchange.emit(this.elem.value);
    }

    constructor(elem: ElementRef) {
        this.elem = elem.nativeElement
        tinymce.init({
            selector: 'textarea'
        });
    }

    public init() {
        tinymce.init({
            selector: 'textarea'
        });
    }

}