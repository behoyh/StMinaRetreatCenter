import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './new.messages.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
