import {ModuleWithProviders, Type} from '@angular/core';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

export const APP_MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
    EventPluginsModule
];
