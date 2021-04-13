# Ngx Ui Tour

[![npm](https://img.shields.io/npm/dt/ngx-ui-tour-core.svg)](https://www.npmjs.com/package/ngx-ui-tour-core)
[![npm](https://img.shields.io/npm/v/ngx-ui-tour-core.svg)](https://www.npmjs.com/package/ngx-ui-tour-core)
[![npm](https://img.shields.io/npm/l/ngx-ui-tour-core.svg)](https://www.npmjs.com/package/ngx-ui-tour-core)

## Table of contents

- [About](#about)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
  - [Simple project](#simple-project)
  - [Lazy loaded modules](#lazy-loaded-modules)
- [Documentation](#documentation)
- [FAQ](#faq)
- [TourService](#tourservice)
- [Step Configuration](#step-configuration)
- [Defaults](#defaults)
- [Hotkeys](#hotkeys)
- [Event Observables](#event-observables)
- [Custom template](#custom-template)
- [Styling Active Tour Anchor](#styling-active-tour-anchor)
- [License](#license)

## About

Ui tour library for Angular 9+. 

This is a fork of __Isaac Mann's__ `ngx-tour` library. The fork was created because the original is no longer maintained,
and I don't have permissions to publish new npm packages.

## Demo

[hakimio.github.io/ngx-ui-tour](https://hakimio.github.io/ngx-ui-tour)

## Installation

### yarn

```bash
# install the core package
yarn add ngx-ui-tour-core

# install one of the UI packages (ngx-ui-tour-md-menu, ngx-ui-tour-ng-bootstrap, ngx-ui-tour-ngx-bootstrap, ngx-ui-tour-ngx-popper)
yarn add ngx-ui-tour-md-menu
```

### npm

```bash
# install the core package
npm i --save ngx-ui-tour-core

# install one of the UI packages (ngx-ui-tour-md-menu, ngx-ui-tour-ng-bootstrap, ngx-ui-tour-ngx-bootstrap, ngx-ui-tour-ngx-popper)
npm i --save ngx-ui-tour-md-menu
```

## Usage

### Simple project
1. Add `<tour-step-template></tour-step-template>` to your root app component
2. Define anchor points for the tour steps by adding the `tourAnchor` directive throughout your app.
```html
<div tourAnchor="some.anchor.id">...</div>
```
3. Define your tour steps using `tourService.initialize(steps)`
```ts
this.tourService.initialize([{
  anchorId: 'some.anchor.id',
  content: 'Some content',
  title: 'First',
}, {
  anchorId: 'another.anchor.id',
  content: 'Other content',
  title: 'Second',
}]);
```
4. Start the tour with `tourService.start()`
5. Check out [the demo source code](https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/md-menu) for an example.

### Lazy loaded modules
1. Add `<tour-step-template></tour-step-template>` to your root app component.
2. Import `TourMatMenuModule.forRoot()` into your app module.
3. Import `TourMatMenuModule` into all lazy loaded modules needing the tour.
4. Import the `TourService` in your highest level eagerly loaded component and initialize all your steps there 
   (even the ones in the lazy loaded modules). Note: Make sure every step object contains its route. For example, if 
   the route to a step is '/home' then your step object should have route: '/home' as a member.
5. Define anchor points for your steps by adding the `tourAnchor` directive throughout your modules (any component 
   that requires it at any level).
   ```html
    <div tourAnchor="some.anchor.id">...</div>
    ```
6. Start the tour with `tourService.start()` in the same component you initialized your steps. Call this right after 
   the initialization.
7. Check out [the demo source code](https://github.com/hakimio/ngx-ui-tour/tree/master/src/app/md-menu/mat-lazy-tour) for an example.

## Documentation
Full documentation can be found in [the demo app](https://hakimio.github.io/ngx-ui-tour). 

## FAQ

### How to center tour step?

You can create an invisible anchor point for the tour step you want to center.
- Add a simple div to your html template which will be used as the tour anchor
```html
<div class="centered-tour-element" tourAnchor="start-tour"></div>
```
- Add CSS for the div
```css
.centered-tour-element {
    position: fixed;
    left: 50%;
    top: 50%;
    /* The anchor should be translated to the left by half of your step width and half height  */
    /* For example, if your tour step has dimensions of 280 × 156 px, you have to translate by (-140px, -78px) */
    transform: translate(-140px, -78px);
}
```
- Use previously defined tour anchor
```ts
this.tourService.initialize([{
  anchorId: 'start-tour',
  title: 'Welcome',
  content: 'Welcome to the Ngx-UI-Tour tour!'
}]);
this.tourService.start();
```

### How to disable main content scrolling when UI tour is active?

You can toggle CSS class which disables main content element scrolling when tour starts/ends.
- Create custom `TourService`:
```ts
@Injectable()
export class MyTourService {
  
  constructor(
    private readonly tourService: TourService
  ) {}
  
  private readonly MAIN_SECTION_CSS_SELECTOR = 'section.main-content';
  private readonly NO_SCROLL_CSS_CLASS = 'no-scroll';
  
  start(steps: IStepOption[]) {
    this.tourService.initialize(steps, {
      route: 'my-route',
      enableBackdrop: true
    });
    this.tourService.end$.subscribe(() => this.setIsScrollable(true));
    this.setIsScrollable(false);
    this.tourService.start();
  }

  private setIsScrollable(isScrollable: boolean) {
    const body = document.body,
      mainSection = document.querySelector(this.MAIN_SECTION_CSS_SELECTOR),
      addOrRemove = isScrollable ? 'remove' : 'add';

    mainSection.classList[addOrRemove](this.NO_SCROLL_CSS_CLASS);
    // You can also optionally disable iOS Safari bounce effect
    body[addOrRemove + 'EventListener']('touchmove', this.preventTouchMove, { passive: false });
  }

  private preventTouchMove(e) {
    e.preventDefault();
  }

}
```
- Add the `no-scroll` CSS class to your global stylesheet (`styles.(s)css`)
```css
.no-scroll {
    overflow: hidden;
}
```
- Use your custom `TourService` to start the UI tour:
```ts
import {MyTourService} from '@app-utils/my-tour.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private readonly myTourService: MyTourService
  ) {
    this.myTourService.start([{
      anchorId: 'start-tour',
      title: 'Welcome',
      content: 'Welcome to the Ngx-UI-Tour tour!'
    }]);
  }

}
```

## TourService
The `TourService` controls the tour. Some key functions include:

**start()**\
Starts the tour

**startAt(stepId: number | string)**\
Start the tour at the step with stepId or at the specified index

**end()**\
Ends the tour

**pause()**\
Pauses the tour

**resume()**\
Resumes the tour

**next()**\
Goes to the next step

**prev()**\
Goes to the previous step

## Step Configuration
Each step can have the following properties.

| Name	| Type	| Default	| Description |
| :-----: |:-------------:|:-------------:|-------------|
| **stepId**	| string	| ""	| A unique identifier for the step |
| **anchorId** |	string	| required	| The anchor to which the step will be attached |
| **title** |	string |	"" |	The title of the tour step |
| **content**	| string	| ""	| The content text of the tour step |
| **enableBackdrop**	| boolean	| false	| Controls whether to enable active element highlighting |
| **route**	| string &#124; UrlSegment[] |	undefined |	The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. |
| **nextStep** |	number &#124; string	| undefined	| The step index or stepId of the next step. If undefined, the next step in the steps array is used. |
| **prevStep** |	number &#124; string |	undefined |	The step index or stepId of the previous step. If undefined, the previous step in the steps array is used. |
| **preventScrolling** |	boolean |	false |	Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. |
| **prevBtnTitle** |	string |	false |	Sets a custom prev button title for a given step. Default is "Prev" |
| **nextBtnTitle** |	string |	false |	Sets a custom next button title for a given step. Default is "Next" |
| **endBtnTitle** |	string |	false |	Sets a custom end button title for a given step. Default is "End" |
| **waitFor** |	Promise &#124; Observable |	undefined |	Waits for the given Promise or Observable before showing the step contents. |

## Defaults
You can set default values in the `TourService.initialize()` function.
```ts
this.tourService.initialize(steps, {
    route: '',
    preventScrolling: true,
});
```
Any value explicitly defined in a step will override the default value.

## Hotkeys
Hotkeys are provided using Angular's @HostListener decorator. Hotkeys are enabled when the tour starts and disabled 
when the tour ends.

- **left arrow** - previous step
- **right arrow** - next step
- **esc** - end tour

## Event Observables
The `TourService` emits events that can be subscribed to like this:
```ts
this.tourService.initialize$.subscribe((steps: IStepOption[]) => {
    console.log('tour configured with these steps:', steps);
});
```
| Name	| Payload	| Emitted When
| :-----: |:-------------:|:-------------:|
| **stepShow$** |	IStepOption	| A step is shown |
| **stepHide$** |	IStepOption |	A step is hidden |
| **initialize$**	| IStepOption[]	| The tour is configured with a set of steps
| **start$**	| IStepOption |	The tour begins
| **end$** |	any |	The tour ends
| **pause$** |	IStepOption |	The tour is paused
| **resume$** |	IStepOption |	The tour resumes
| **anchorRegister$** |	string |	An anchor is registered with the tour
| **anchorUnregister$** |	string |	An anchor is unregistered from the tour
| **startWaiting$** | IStepOption | Starts waiting for Promise or Observable set in "waitFor" config
| **stopWaiting$** | IStepOption | "waitFor" config Promise or Observable completes

## Custom template
You can also customize the tour step template by providing an `<ng-template let-step="step">` inside the 
`<tour-step-template>`.

The default template is equivalent to this:

```html
<tour-step-template>
  <ng-template let-step="step">
    <mat-card (click)="$event.stopPropagation()">
      <mat-card-title>
        {{step?.title}}
      </mat-card-title>
      <mat-card-content>
        {{step?.content}}
      </mat-card-content>
      <mat-card-actions>
        <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">
          <mat-icon>chevron_left</mat-icon>
        </button>
        <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">
          <mat-icon>chevron_right</mat-icon>
        </button>
        <button mat-button (click)="tourService.end()">{{step?.endBtnTitle}}</button>
      </mat-card-actions>
    </mat-card>
  </ng-template>
</tour-step-template>
```

## Styling Active Tour Anchor

The currently active tour anchor element has a `touranchor--is-active` class applied to it, so you can apply your own 
custom styles to that class to highlight the element being referenced.

## License

MIT
