import {type EnvironmentProviders, type Provider, provideZonelessChangeDetection} from '@angular/core';
import {ROUTES} from './app.routes';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    provideRouter(ROUTES,
        withPreloading(PreloadAllModules)
    ),
    provideZonelessChangeDetection()
];
