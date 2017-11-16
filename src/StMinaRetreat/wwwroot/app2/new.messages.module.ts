import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DefaultMessagesComponent } from './components/new.messages.default';
import { BannerMessagesComponent } from './components/new.messages.banner';
import { MarketingMessagesComponent } from './components/new.messages.marketing';
import { WriteMessagesComponent } from './new.messages.component';
import { PopupMessagesComponent } from './components/new.messages.popup';
import { AcknowledgeMessagesComponent } from './components/new.messages.acknowledgment';
import { AppRoutingModule } from './new.messages.routing.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, AppRoutingModule],
    declarations: [WriteMessagesComponent, DefaultMessagesComponent, BannerMessagesComponent, MarketingMessagesComponent, PopupMessagesComponent, AcknowledgeMessagesComponent],
    bootstrap: [WriteMessagesComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/newmessage.html/' }]
})
export class AppModule {

    ngOnInit() { }

}