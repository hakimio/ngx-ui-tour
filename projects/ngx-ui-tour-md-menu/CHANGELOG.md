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
