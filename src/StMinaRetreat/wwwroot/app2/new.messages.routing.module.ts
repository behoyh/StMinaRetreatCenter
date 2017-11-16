import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteMessagesComponent } from './new.messages.component';
import { DefaultMessagesComponent } from './components/new.messages.default'
import { BannerMessagesComponent } from './components/new.messages.banner';
import { MarketingMessagesComponent } from './components/new.messages.marketing';
import { PopupMessagesComponent } from './components/new.messages.popup';
import { AcknowledgeMessagesComponent } from './components/new.messages.acknowledgment';


const routes: Routes = [
    { path: '', component: DefaultMessagesComponent },
    { path: 'banner', component: BannerMessagesComponent },
    { path: 'marketing', component: MarketingMessagesComponent },
    { path: 'popup', component: PopupMessagesComponent },
    { path: 'acknowledgment', component: AcknowledgeMessagesComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule { }