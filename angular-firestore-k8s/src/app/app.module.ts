import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app.router.module';
import { APP_BASE_HREF } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from './shared/app.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LodgingComponent } from './lodging/lodging.component';
import { RegisterComponent } from './register/register.component';
import { DonateComponent } from './donate/donate.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavComponent } from './nav/nav.component';
import { SaintsComponent } from './saints/saints.component';
import { NewsComponent } from './news/news.component';
import { CollageComponent } from './collage/collage.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

import { getFirestore, provideFirestore, } from '@angular/fire/firestore';

@NgModule({
    declarations: [
        AppComponent,
        AboutUsComponent,
        HomeComponent,
        LodgingComponent,
        RegisterComponent,
        DonateComponent,
        CalendarComponent,
        NavComponent,
        SaintsComponent,
        NewsComponent,
        CollageComponent
    ],
    imports: [
        BrowserModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        BrowserAnimationsModule,
        FormsModule,
        AppRouterModule,
        RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
        ReactiveFormsModule,
        NgxsModule.forRoot([
            AppState
        ], { developmentMode: !environment.production }),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot(),
        //NgxsRouterPluginModule.forRoot(),
        AngularEditorModule,
        HttpClientModule
    ],
    exports: [],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
