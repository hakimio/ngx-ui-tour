import type {HighlightJSOptions} from 'ngx-highlightjs';
import {provideHighlightOptions} from 'ngx-highlightjs';
import {Title} from '@angular/platform-browser';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_PAGES_ICONS,
    TUI_DOC_TITLE
} from '@taiga-ui/addon-doc';
import {LocationStrategy, PathLocationStrategy, ViewportScroller} from '@angular/common';
import {pages} from './pages';
import {LOGO_CONTENT} from './shared/logo/logo.component';
import {
    type EnvironmentProviders,
    inject,
    provideEnvironmentInitializer,
    type Provider,
    provideZonelessChangeDetection
} from '@angular/core';
import {PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading} from '@angular/router';
import {ROUTES} from './app.routes';
import {provideIonicAngular} from '@ionic/angular/standalone';
import {provideTaiga, TUI_ANIMATIONS_SPEED} from '@taiga-ui/core';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura-compat';
import {APP_VERSION} from './shared/version-manager';

export const DEFAULT_TABS = [
    `Description`,
    `Setup`,
    `API`,
    `FAQ`,
    'Misc'
];
const TITLE_PREFIX = 'Ngx UI Tour: ';

const HIGHLIGHT_OPTIONS: HighlightJSOptions = {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
    languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        xml: () => import('highlight.js/lib/languages/xml'),
        css: () => import('highlight.js/lib/languages/css')
    }
};

export const APP_PROVIDERS: (Provider | EnvironmentProviders)[] = [
    Title,
    provideHighlightOptions(HIGHLIGHT_OPTIONS),
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
        provide: TUI_DOC_PAGES_ICONS,
        useValue: {
            'Tour UI Libraries': '@tui.plane'
        }
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
        provide: TUI_ANIMATIONS_SPEED,
        useValue: 1
    },
    {
        provide: APP_VERSION,
        useValue: 17
    },
    provideZonelessChangeDetection(),
    provideRouter(ROUTES,
        withPreloading(PreloadAllModules),
        withInMemoryScrolling({
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
        })
    ),
    provideEnvironmentInitializer(() => {
        const viewportScroller = inject(ViewportScroller);

        viewportScroller.setOffset([0, 80]);
    }),
    provideIonicAngular({
        mode: 'md'
    }),
    providePrimeNG({
        theme: {
            preset: Aura
        },
        license: `eyJpZCI6ImJkZjdhZTNiLTMxY2UtNDA5MC04YjIzLWJiYWE4MDdiMjk0YiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODI4MzM5MTIsImV4cCI6MTgxNDM2OTkxMn0.eCBGrshzZEsI6DtrCR0a1h7W_rON_aKnQdnTqpBu9KzXCzOhav9orRSsH-k4Yu6UTsV7VARtjV3_gZ2wSiV6Bw`
    }),
    provideTaiga()
];
