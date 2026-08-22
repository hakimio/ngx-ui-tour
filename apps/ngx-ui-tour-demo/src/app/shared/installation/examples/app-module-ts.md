```ts
import {NgModule} from '@angular/core';
import {provideUiTour} from 'ngx-ui-tour-md-menu';

@NgModule({
    // ....
    providers: [
        provideUiTour({
            enableBackdrop: true,
            backdropConfig: {
                offset: 10
            }
        })
    ]
})
export class AppModule {}
```
