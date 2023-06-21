import {ModuleWithProviders, Type} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {EventPluginsModule} from '@tinkoff/ng-event-plugins';

export const APP_MODULES: (Type<unknown> | ModuleWithProviders<unknown>)[] = [
    IonicModule.forRoot({
        mode: 'md'
    }),
    EventPluginsModule
];
