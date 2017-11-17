import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './new.messages.module';
import { enableProdMode } from '@angular/core';
enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
