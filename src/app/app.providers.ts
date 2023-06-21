import {HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs';
import {Title} from '@angular/platform-browser';
import {TUI_DOC_DEFAULT_TABS, TUI_DOC_LOGO, TUI_DOC_PAGES, TUI_DOC_TITLE} from '@taiga-ui/addon-doc';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {pages} from './pages';
import {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';
import {LOGO_CONTENT} from './shared/logo/logo.component';
import {InjectionToken, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';
import {ROUTES} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';

export const DEFAULT_TABS = [
    `Description`,
    `Setup`,
    `API`,
    `FAQ`,
    'Misc'
];
const TITLE_PREFIX = 'Ngx UI Tour: ';

export const HIGHLIGHT_OPTIONS_VALUE: HighlightOptions = {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        xml: () => import('highlight.js/lib/languages/xml'),
        css: () => import('highlight.js/lib/languages/css')
    }
};

export const DELAY_AFTER_NAVIGATION = new InjectionToken<number>('DelayAfterNavigation', {
    factory: () => 0
});

export const APP_PROVIDERS = [
    Title,
    {
        provide: HIGHLIGHT_OPTIONS,
        useValue: HIGHLIGHT_OPTIONS_VALUE
    },
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
    },
    {
        provide: TUI_DOC_TITLE,
        useValue: TITLE_PREFIX
    },
    {
        provide: TUI_DOC_PAGES,
        useValue: pages
    },
    {
        provide: TUI_DOC_DEFAULT_TABS,
        useValue: DEFAULT_TABS
    },
    {
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT
    },
    {
        provide: TUI_ANIMATIONS_DURATION,
        useValue: 300
    },
    {
        provide: DELAY_AFTER_NAVIGATION,
        useValue: 150
    },
    provideZoneChangeDetection({
        eventCoalescing: true
    }),
    provideAnimations(),
    provideRouter(ROUTES,
        withPreloading(PreloadAllModules)
    )
];
