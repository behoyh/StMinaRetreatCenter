import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { WriteNewsComponent } from './app.write.news.component';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule],
    declarations: [WriteNewsComponent],
    bootstrap: [WriteNewsComponent]
})
export class AppModule {

    ngOnInit() { enableProdMode(); }

}