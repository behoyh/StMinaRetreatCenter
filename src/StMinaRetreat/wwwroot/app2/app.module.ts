﻿import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { WriteNewsComponent } from './app.write.news.component';
import { TinyEditor } from './directives/tiny.directive';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [WriteNewsComponent, TinyEditor],
    bootstrap: [WriteNewsComponent]
})
export class AppModule {

    ngOnInit() { enableProdMode(); }

}