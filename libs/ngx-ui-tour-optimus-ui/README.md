# ngx-ui-tour-optimus-ui

Optimus UI implementation for [`ngx-ui-tour`](https://github.com/hakimio/ngx-ui-tour), an Angular library for creating guided product tours.

This package uses Optimus UI Popover to render tour steps. It requires Angular 22, `@openng/optimus-ui`, and `@openng/icons`.

## Setup

Configure Optimus UI in your application, then add `provideUiTour()` to the application providers. Import the OpenNG icon stylesheet in your global stylesheet:

```scss
@import '@openng/icons/openng-icons.css';
```

If the application also uses PrimeNG, load only one `pi` icon stylesheet to avoid font conflicts.

```ts
import {ApplicationConfig} from '@angular/core';
import {provideOptimus} from '@openng/optimus-ui/config';
import OptimusAura from '@openng/optimus-ui-themes/aura';
import {provideUiTour} from 'ngx-ui-tour-optimus-ui';

export const appConfig: ApplicationConfig = {
    providers: [
        provideOptimus({
            theme: {
                preset: OptimusAura
            }
        }),
        provideUiTour()
    ]
};
```

## Usage

Import `TourOptimusUi`, place the step template once in your application, and mark the elements that a tour should target with `tourAnchor`.

```ts
import {Component, inject, OnInit} from '@angular/core';
import {
    type IStepOption,
    TourOptimusUi,
    TourService
} from 'ngx-ui-tour-optimus-ui';

@Component({
    selector: 'app-tour',
    imports: [TourOptimusUi],
    template: `
        <button tourAnchor="welcome" (click)="tourService.start()">
            Start tour
        </button>

        <tour-step-template/>
    `
})
export class TourComponent implements OnInit {
    protected readonly tourService = inject(TourService);

    ngOnInit() {
        const steps: IStepOption[] = [{
            anchorId: 'welcome',
            title: 'Welcome',
            content: 'This is the first step of the tour.'
        }];

        this.tourService.initialize(steps);
    }
}
```

Call `tourService.start()` after initializing the steps to begin the tour.

## Configuration

`provideUiTour()` accepts global step defaults. For example, enable closing a tour step when the user clicks outside the Optimus UI popover:

```ts
provideUiTour({
    closeOnOutsideClick: true
})
```

`closeOnOutsideClick` can also be set on an individual step. All common step options, such as `anchorId`, `title`, `content`, `route`, `enableBackdrop`, and navigation button labels, are provided by `ngx-ui-tour-core`.

## Documentation and demo

- [Optimus UI tour documentation](https://hakimio.github.io/ngx-ui-tour/optimus-ui/Setup)
- [Live demo](https://hakimio.github.io/ngx-ui-tour)
- [Project homepage](https://github.com/hakimio/ngx-ui-tour)

## License

MIT
