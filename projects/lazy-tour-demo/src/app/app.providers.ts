import {EnvironmentProviders, Provider, provideZoneChangeDetection} from '@angular/core';
import {ROUTES} from './app.routes';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    provideRouter(ROUTES,
        withPreloading(PreloadAllModules)
    ),
    provideAnimations(),
    provideZoneChangeDetection({
        eventCoalescing: true
    })
];