import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    Directive,
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';

export class News {
    title: string;
    news: string;
}

var NEWS: News = { title: "", news: "" };

declare var tinymce: any;

@Component({
    selector: 'write-news',
    templateUrl: 'app2/templates/write-news.html'
})

export class WriteNewsComponent implements OnInit {
    ngOnInit() { this.getNews(); }

    constructor(private http: Http) { }

    news = NEWS;

    getNews() {
        this.http.get('./api/SiteNews').subscribe(data => this.news = data.json() as News);
    }

    setNews() {
        debugger;
        this.http.post('./api/SiteNews', this.news).subscribe(res => this.getNews());
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    @Output() onEditorKeyup = new EventEmitter<any>();

    editor: any;
    document: any;

    ngAfterViewInit() {
        tinymce.init({
            selector: 'textarea',
            toolbar: 'undo redo | link image media',
            file_picker_types: 'image',
            paste_data_images: true,
            relative_urls: false,
            convert_urls: false,
            remove_script_host: false,
            images_upload_handler: function (blob:any, success:any, failure:any) {
                tinymce.activeEditor.execCommand("mceInsertContent", false, "<img src='" + blob + "'");
            },
            file_picker_callback: function (cb: any, value: any, meta: any) {
                var input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                input.onchange = function () {

                    var file = input.files[0];

                    if (file) {
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function (e) {
                       
                            cb(reader.result);
                        };

                    }
                };

                input.click();
            },
            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor imagetools"
            ],
            setup: (editor: any) => {
                debugger;
                this.editor = editor;
                editor.on('change', () => {
                    const content = editor.getContent();
                    this.news.news = content;
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }

}

