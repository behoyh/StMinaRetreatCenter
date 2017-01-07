import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsletterService } from './NewsletterService';
import { ViewNewsComponent } from './app.view.news.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    bootstrap: [AppComponent, ViewNewsComponent],
    providers: [NewsletterService]
})
export class AppModule {

    ngOnInit() { enableProdMode(); }

}