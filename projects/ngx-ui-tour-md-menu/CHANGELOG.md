<a name="10.5.1"></a>

# [10.5.1](https://github.com/hakimio/ngx-ui-tour) (2023-03-14)

### Fixes
- Fix default step max-width.

<a name="10.5.0"></a>

# [10.5.0](https://github.com/hakimio/ngx-ui-tour) (2023-03-13)

### Features
 - New `allowUserInitiatedNavigation` config. Enable to keep the tour open while the user navigates to a different page.
    Can cause the tour to get "stuck" if active anchor element is removed from the DOM after the navigation.
    The option is not related to navigation initiated by the UI tour and should not be enabled in most cases.
- New `stepDimensions` config. Use it to customize tour step width, min-width and max-width. Accepts "width" CSS
  property values, ie "250px" or "auto".

<a name="10.4.0"></a>

# [10.4.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-14)

### Features
- Check not only if element is in viewport but also if it's not covered by another element when deciding whether
  to scroll the anchor element into view.

### Fixes
- Backdrop should be hidden on tour pause.

<a name="10.3.0"></a>

# [10.3.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-08)

### Features
- New `scrollContainer` config. Can be set to CSS selector or html element reference. Only set this config if you have
  enabled `smoothScroll` and tour step description pops-up before scrolling has finished or doesn't show up at all.
  This should only be the case when scroll container is part of shadow DOM.

<a name="10.2.0"></a>

# [10.2.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-06)

### Features
- New `backdropConfig.parentContainer` config. Can be set to CSS selector or html element reference. Set it to fix
  backdrop stacking issues. Defaults to body.

### Fixes
- Use injected `document` reference everywhere for SSR safety.

<a name="10.1.0"></a>

# [10.1.0](https://github.com/hakimio/ngx-ui-tour) (2023-01-26)

### Features
- New `centerAnchorOnScroll` config. Enable to keep active anchor element centered when possible. "Safari" currently
  does not support this feature.
- New `smoothScroll` config. Activate to use smooth scroll when scrolling to tour anchor element. Animations have to be
  enabled on OS level for it to work. Controlled by "Animate controls and elements inside windows" setting on Windows OS.

### Fixes
- UI Tour now automatically ends on any navigation which was not started by the tour itself. Before only browser's back
  and forward navigation would cause the tour to end.

<a name="10.0.0"></a>

# [10.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-01-10)

### Features
- Support for Angular 15 and Angular Material 15
- New `delayBeforeStepShow` config to add delay before showing tour step
- New `duplicateAnchorHandling` config to customize how duplicate anchor elements should be handled
- All components and directives are now provided as `standalone`. This allows importing only the components you are
  using and use anchor directive as host directive.
- `stepShow$` and `stepHide$` event payloads now include tour direction indicating if the user pressed "Next" or
  "Prev" button.

### Fixes
- Fragments/anchors ("foo#bar") are no longer ignored in `route` step config.
- `prevStep` and `nextStep` configs can now be set to step index "zero".

### Breaking changes
- `TourMatMenuModule.forRoot()` method was removed since all services are now provided in "root". Now only the tour 
  module itself has to be imported.
- Angular 14 is no longer supported.
- RxJS v6 is no longer supported.
- `stepShow$` and `stepHide$` event payloads have changed.
- Steps marked as both `async` and `optional` at the same time will now throw an error since this option combination
  is not supported by the library.

<a name="9.3.1"></a>

# [9.3.1](https://github.com/hakimio/ngx-ui-tour) (2022-11-24)

### Fixes
- Fix compatibility with RxJS v6

<a name="9.3.0"></a>

# [9.3.0](https://github.com/hakimio/ngx-ui-tour) (2022-11-23)

### Features
- Backdrop is now resized not only on window resize but also when anchor element resizes for other reasons, ie
  navigation menu collapses or border is applied to the anchor element to distinguish active tour element.

<a name="9.2.1"></a>

# [9.2.1](https://github.com/hakimio/ngx-ui-tour) (2022-11-21)

### Fixes
- Fix TypeScript production build error (#82)

<a name="9.2.0"></a>

# [9.2.0](https://github.com/hakimio/ngx-ui-tour) (2022-11-21)

### Features
- Custom `StepOption` interface can now be provided when extending `TourService` class from one of the UI libraries

<a name="9.1.0"></a>

# [9.1.0](https://github.com/hakimio/ngx-ui-tour) (2022-10-24)

### Features
- New `backdropConfig` step config to configure backdrop `zIndex` and `backgroundColor`

### Fixes
- Tour should close when user navigates to a different page using browser's back/forward navigation

<a name="9.0.0"></a>

# [9.0.0](https://github.com/hakimio/ngx-ui-tour) (2022-09-02)

### Features
- Support for Angular 14 and Angular Material 14
- Navigation to next step with right arrow key is now disabled when current step has `nextOnAnchorClick` option enabled.

### Fixes
- When `nextOnAnchorClick` step option is enabled, it should only start listening to anchor click event after
  checking if the anchor element has been registered.
- "Expression has changed after it was checked" error in some cases when using Angular Material v13.2.3 or higher.

### Breaking changes
- `goToNextOnAnchorClick` step config was renamed to `nextOnAnchorClick`
- Angular v13 and lower versions are no longer supported

<a name="8.1.2"></a>

# [8.1.2](https://github.com/hakimio/ngx-ui-tour) (2022-06-22)

### Fixes

- Fix backdrop not expanding to full height in some cases

<a name="8.1.1"></a>

# [8.1.1](https://github.com/hakimio/ngx-ui-tour) (2022-06-21)

### Fixes

- Fix backdrop position updating

<a name="8.1.0"></a>

# [8.1.0](https://github.com/hakimio/ngx-ui-tour) (2022-06-21)

### Features

- New `goToNextOnAnchorClick` config which can be used to go to the next step by clicking on anchor element instead
  of "Next" button. Implemented by Luca Oliano (@lucaoliano).

<a name="8.0.2"></a>

# [8.0.2](https://github.com/hakimio/ngx-ui-tour) (2022-03-30)

### Fixes

- Fixed unexpected focus behaviour. Bug #53

<a name="8.0.1"></a>

# [8.0.1](https://github.com/hakimio/ngx-ui-tour) (2022-02-21)

### Fixes

- Fixed optional steps in the beginning or end of the tour

<a name="8.0.0"></a>

# [8.0.0](https://github.com/hakimio/ngx-ui-tour) (2022-01-28)

### Features

- Support Angular 13 and RxJS v7
- "Ivy" partial compilation mode
- "ngx-ui-tour-core" is now a "hard" dependency and doesn't need to be installed separately

### Breaking changes
- Due to "Ivy" partial compilation mode, Angular versions below v12 are no longer supported

<a name="7.0.2"></a>

# [7.0.2](https://github.com/hakimio/ngx-ui-tour) (2021-09-23)

### Fixes

- Switched back to "View Engine" compilation mode to fix Angular v11 and older builds

<a name="7.0.1"></a>

# [7.0.1](https://github.com/hakimio/ngx-ui-tour) (2021-09-09)

### Fixes

- Use strict check to determine if tour step "route" config is set to avoid ignoring empty string routes
- Show tour steps asynchronously to avoid trying to show tour step before anchor element is registered in some cases

<a name="7.0.0"></a>

# [7.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-09-08)

### Features
- New `delayAfterNavigation` config to set a delay between navigation to a different route and showing the step contents
- New `closeOnOutsideClick` config to set if the tour should close on outside click
- New `disablePageScrolling` config to prevent page scrolling when UI tour is active
- Default tour step template has been updated
- "Angular Ivy" partial compilation to reduce initial build time of applications using this library

### Breaking Changes
- The tour no longer closes on outside click by default. If you prefer the old behavior, you can enable `closeOnOutsideClick` config
- "Angular ViewEngine" compiler is no longer supported
- Removed deprecated `waitFor` config and associated events (`startWaiting$` and `stopWaiting$`). `isAsync` should be used instead.
- `preventScrolling` config was renamed to `disableScrollToAnchor` to avoid ambiguity

<a name="6.1.0"></a>

# [6.1.0](https://github.com/hakimio/ngx-ui-tour) (2021-08-30)

### Features

- New `isOptional` config used to mark tour steps which should be skipped when their anchor element is not found
- New `placement` config to allow manual positioning of the tour step

<a name="6.0.0"></a>

# [6.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-05-31)

### Features

- Support Angular 12
- New `isAsync` config used to mark tour steps which anchor element is added to DOM with a delay (ie after data is loaded)

### Deprecations

- `waitFor` config was deprecated in favor of `isAsync`

<a name="5.2.0"></a>

# [5.2.0](https://github.com/hakimio/ngx-ui-tour) (2021-04-20)

### Features

- Tour step now always stays in view when backdrop is enabled and browser window is resized
- Interaction with the base page is now blocked when backdrop is enabled

### Fixes

- Fix tour backdrop position for IE11

<a name="5.1.1"></a>

# [5.1.1](https://github.com/hakimio/ngx-ui-tour) (2021-04-09)

### Fixes

- Fix wrong backdrop size and position when resizing window and backdrop is applied to multiple steps

<a name="5.1.0"></a>

# [5.1.0](https://github.com/hakimio/ngx-ui-tour) (2021-04-09)

### Features

- "waitFor" option

### Fixes

- Fix backdrop position when browser window is resized
- Fix backdrop position on page scroll

<a name="5.0.0"></a>

# [5.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-04-06)

### Features

- Angular 11 support
- No longer depends on commonJS "withinviewport" library
- HTML tags are now supported in step content
- Rebrand to "ngx-ui-tour"

<a name="4.3.0"></a>

# [4.3.0](https://github.com/isaacplmann/ngx-tour) (2020-08-17)

### Features

- Replaced `withinviewport()` function from 3rd party library with our own custom `isInViewport()` function to fix 
CommonJS warning in Angular 10, reduce bundle size and to remove non-peer dependency  

<a name="4.2.0"></a>

# [4.2.0](https://github.com/isaacplmann/ngx-tour) (2020-08-10)

### Features

- Support Angular 10

<a name="4.1.1"></a>

# [4.1.1](https://github.com/isaacplmann/ngx-tour) (2019-12-07)

### Fixes

- Skip undefined tourAnchors

<a name="4.1.0"></a>

# [4.1.0](https://github.com/isaacplmann/ngx-tour) (2019-10-23)

### Features

- Support Angular 8 as peer dependency
- Support Ivy renderer

<a name="4.0.1"></a>

# [4.0.1](https://github.com/isaacplmann/ngx-tour) (2018-12-05)

### Fixes

- NavigationStart only hide currentStep if route is specified eg. routing used

<a name="4.0.0"></a>

# [4.0.0](https://github.com/isaacplmann/ngx-tour) (2018-11-27)

### BREAKING CHANGES

- Require Angular 7 as peer dependency
- Require Angular Material 7 as peer dependency

<a name="3.1.1"></a>

# [3.1.1](https://github.com/isaacplmann/ngx-tour) (2018-08-23)

### Bug fixes

- Add class to backdrop element

<a name="3.1.0"></a>

# [3.1.0](https://github.com/isaacplmann/ngx-tour) (2018-08-16)

### Features

- EnableBackdrop option

<a name="3.0.0"></a>

# [3.0.0](https://github.com/isaacplmann/ngx-tour) (2018-05-17)

### BREAKING CHANGES

- Require Angular 6 as peer dependency
- Require Angular Material 6 as peer dependency

<a name="2.0.0"></a>

# [2.0.0](https://github.com/isaacplmann/ngx-tour) (2017-01-31)

### Features

- Add touranchor-is-active class
- Add options to set button text

<a name="2.0.0-rc.2"></a>

# [2.0.0-rc.2](https://github.com/isaacplmann/ngx-tour) (2017-10-20)

### BREAKING CHANGES

- Update to ngx-tour-core 2.x (Angular 5 and disabling hotkeys)
- Update @angular/material to 5.0.0-rc.2

<a name="2.0.0-beta.12"></a>

# [2.0.0-beta.12](https://github.com/isaacplmann/ngx-tour) (2017-10-20)

### BREAKING CHANGES

- Update @angular/material to 2.0.0-beta.12
- Except for the library name, all 'md-' strings have been changed to 'mat-'

<a name="1.0.4"></a>

# [1.0.4](https://github.com/isaacplmann/ngx-tour) (2017-08-30)

### Bug fixes

- Update @angular/material to 2.0.0-beta.10

<a name="1.0.3"></a>

# [1.0.3](https://github.com/isaacplmann/ngx-tour) (2017-07-31)

### Bug fixes

- Fix aot build

<a name="1.0.2"></a>

# [1.0.2](https://github.com/isaacplmann/ngx-tour) (2017-07-19)

### Docs

- Add readme

<a name="1.0.1"></a>

# [1.0.1](https://github.com/isaacplmann/ngx-tour) (2017-07-18)

### Bug fixes

- Export all of core exports

<a name="1.0.0"></a>

# [1.0.0](https://github.com/isaacplmann/ngx-tour) (2017-07-18)

### BREAKING CHANGES

- Split out to a separate package
