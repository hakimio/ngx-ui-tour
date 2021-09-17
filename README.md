![Ngx UI Tour](https://user-images.githubusercontent.com/768105/130578626-8b6cbefb-217c-4943-8661-22459a7b67a3.png)

> UI tour library for Angular 9+

Angular Material, Taiga UI, Ng Bootstrap and Ngx Bootstrap UIs are supported.

`ngx-ui-tour` is a fork of __Isaac Mann's__ `ngx-tour`. The project had to be forked since the original is no longer 
maintained.

---

[![npm](https://img.shields.io/npm/dt/ngx-ui-tour-core.svg)](https://www.npmjs.com/package/ngx-ui-tour-core)
[![npm](https://img.shields.io/npm/v/ngx-ui-tour-core.svg)](https://www.npmjs.com/package/ngx-ui-tour-core)
[![npm](https://img.shields.io/npm/l/ngx-ui-tour-core.svg)](https://www.npmjs.com/package/ngx-ui-tour-core)

## Table of contents

- [Demo and documentation](#demo-and-documentation)
- [Installation](#installation)
- [Usage](#usage)
  - [Simple project](#simple-project)
  - [Lazy loaded modules](#lazy-loaded-modules)
- [FAQ](#faq)
- [TourService](#tourservice)
- [Step Configuration](#step-configuration)
- [Defaults](#defaults)
- [Hotkeys](#hotkeys)
- [Event Observables](#event-observables)
- [Custom template](#custom-template)
- [Styling Active Tour Anchor](#styling-active-tour-anchor)
- [License](#license)

## Demo and documentation

Demo and documentation can be found at [hakimio.github.io/ngx-ui-tour](https://hakimio.github.io/ngx-ui-tour)

## Installation

### yarn

```bash
# install the core package
yarn add ngx-ui-tour-core

# install one of the UI packages (ngx-ui-tour-md-menu, ngx-ui-tour-ng-bootstrap, ngx-ui-tour-ngx-bootstrap, ngx-ui-tour-tui-dropdown)
yarn add ngx-ui-tour-md-menu
```

### npm

```bash
# install the core package
npm i --save ngx-ui-tour-core

# install one of the UI packages (ngx-ui-tour-md-menu, ngx-ui-tour-ng-bootstrap, ngx-ui-tour-ngx-bootstrap, ngx-ui-tour-tui-dropdown)
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
7. Check out [the demo source code](https://github.com/hakimio/ngx-ui-tour/tree/master/projects/lazy-tour-demo/src/app) for an example.

## FAQ

### How to center tour step?

You can create an invisible anchor point for the tour step you want to center.
1. Add a simple div to your html template which will be used as the tour anchor
```html
<div class="centered-tour-element" tourAnchor="start-tour"></div>
```
2. Add CSS for the div
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
3. Use previously defined tour anchor
```ts
this.tourService.initialize([{
  anchorId: 'start-tour',
  title: 'Welcome',
  content: 'Welcome to the Ngx-UI-Tour tour!'
}]);
this.tourService.start();
```

### How to disable main content scrolling when UI tour is active?

**NOTE: starting with v7 you can simply enable `disablePageScrolling` step config if you are using `md-menu` tour UI**

**If you are using older version or different UI implementation you can still use following guide to achieve this**

You can toggle CSS class which disables main content element scrolling when tour starts/ends.
1. Create custom `TourService`:
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
2. Add the `no-scroll` CSS class to your global stylesheet (`styles.(s)css`)
```css
.no-scroll {
    overflow: hidden;
}
```
3. Use your custom `TourService` to start the UI tour:
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
| **closeOnOutsideClick**	| boolean |	false |	Enable to close the tour on outside click ("md-menu" UI only) |
| **disablePageScrolling** |	boolean |	false |	Prevents user from being able to scroll the page when the UI tour is active ("md-menu" UI only) |
| **nextStep** |	number &#124; string	| undefined	| The step index or stepId of the next step. If undefined, the next step in the steps array is used. |
| **prevStep** |	number &#124; string |	undefined |	The step index or stepId of the previous step. If undefined, the previous step in the steps array is used. |
| **placement** |	MdMenuPlacement |	undefined |	Tour step position with respect to the anchor. |
| **disableScrollToAnchor** |	boolean |	false |	Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. |
| **prevBtnTitle** |	string |	"Prev" |	Sets a custom prev button title for a given step. Default is "Prev" |
| **nextBtnTitle** |	string |	"Next" |	Sets a custom next button title for a given step. Default is "Next" |
| **endBtnTitle** |	string |	"End" |	Sets a custom end button title for a given step. Default is "End" |
| **isAsync** |	boolean |	false |	Mark your step as "async" if anchor element is added to DOM with a delay (ie after data is loaded). |
| **isOptional** |	boolean |	false |	Mark your step as "optional" if it should be skipped when anchor element is not found. Step can not be marked both "optional" and "async". |
| **delayAfterNavigation** |	number |	0 |	Delay between navigation to a different route and showing the tour step in ms. Might be needed if you use custom scrollbar and the page is not scrolled all the way before the tour step is shown. |

## Defaults
You can set default values in the `TourService.initialize()` function.
```ts
this.tourService.initialize(steps, {
    route: '',
    disablePageScrolling: true
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
| **start$**	| void |	The tour begins
| **end$** |	void |	The tour ends
| **pause$** |	void |	The tour is paused
| **resume$** |	void |	The tour resumes
| **anchorRegister$** |	string |	An anchor is registered with the tour
| **anchorUnregister$** |	string |	An anchor is unregistered from the tour

## Custom template
You can also customize the tour step template by providing an `<ng-template let-step="step">` inside the 
`<tour-step-template>`.

The default template is equivalent to this:

```html
<tour-step-template>
    <ng-template let-step="step">
        <mat-card (click)="$event.stopPropagation()">
            <mat-card-title>
                <div class="title-text">{{step?.title}}</div>
                <mat-icon class="title-close" (click)="tourService.end()">close</mat-icon>
            </mat-card-title>

            <mat-card-content [innerHTML]="step?.content"></mat-card-content>

            <mat-card-actions align="end">
                <button
                    mat-button
                    class="prev"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <mat-icon>chevron_left</mat-icon> {{step?.prevBtnTitle}}
                </button>
                <button
                    mat-button
                    class="next"
                    *ngIf="tourService.hasNext(step)"
                    (click)="tourService.next()"
                >
                    {{step?.nextBtnTitle}} <mat-icon>chevron_right</mat-icon>
                </button>
                <button
                    mat-button
                    (click)="tourService.end()"
                    *ngIf="!tourService.hasNext(step)"
                >
                    {{step?.endBtnTitle}}
                </button>
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
