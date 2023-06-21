import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {importProvidersFrom} from '@angular/core';
import {APP_MODULES} from './app/app.modules';
import {APP_PROVIDERS} from './app/app.providers';

bootstrapApplication(AppComponent, {
    providers: [
        ...APP_PROVIDERS,
        importProvidersFrom(...APP_MODULES)
    ]
}).catch(err => console.error(err));
