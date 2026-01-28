```ts
import {ApplicationConfig} from '@angular/core';
import {provideUiTour} from 'ngx-ui-tour-md-menu';

export const appConfig: ApplicationConfig = {
    providers: [
        provideUiTour({
            enableBackdrop: true,
            backdropConfig: {
                offset: 10
            }
        })
    ]
};
```
