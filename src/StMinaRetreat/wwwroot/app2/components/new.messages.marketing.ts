import { Component, ViewChild, OnInit } from "@angular/core";

@Component({
    selector: 'default',
    templateUrl: './app2/components/templates/marketing-template.html',
    host: {
        class: 'col-lg-10'
    }
})

export class MarketingMessagesComponent implements OnInit {

    @ViewChild('fileInput') fileInput: any;

    constructor() { }

    ngOnInit() {
    }

    private upload() {
        const fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
            const formData = new FormData();
            formData.append('files', fileBrowser.files[0]);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/Data/UploadFiles', true);
            xhr.onload = function () {
                if (this['status'] === 200) {
                    const responseText = this['responseText'];
                    const files = JSON.parse(responseText);
                    //todo: emit event
                } else {
                    //todo: error handling
                }
            };
            xhr.send(formData);
        }
    }
}