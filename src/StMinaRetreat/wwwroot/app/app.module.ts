﻿import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsletterService } from './NewsletterService'



@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [NewsletterService]
})
export class AppModule {

    ngOnInit() { enableProdMode(); }

}