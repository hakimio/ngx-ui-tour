<a name="8.0.1"></a>

# [8.0.1](https://github.com/hakimio/ngx-ui-tour) (2022-02-21)

### Fixes

- Fixed optional steps in the beginning or end of the tour

<a name="8.0.0"></a>

# [8.0.0](https://github.com/hakimio/ngx-ui-tour) (2022-01-28)

### Features

- Support Angular 13 and RxJS v7
- "Ivy" partial compilation mode

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
- "Angular Ivy" partial compilation to reduce initial build time of applications using this library

### Breaking Changes
- "Angular ViewEngine" compiler is no longer supported
- Removed deprecated `waitFor` config and associated events (`startWaiting$` and `stopWaiting$`). `isAsync` should be used instead.
- `preventScrolling` config was renamed to `disableScrollToAnchor` to avoid ambiguity

<a name="6.1.0"></a>

# [6.1.0](https://github.com/hakimio/ngx-ui-tour) (2021-08-30)

### Features

- New `isOptional` config used to mark tour steps which should be skipped when their anchor element is not found

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

- "enableBackdrop" option
- "waitFor" option

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

- Introduced `isInViewport(htmlElement)` function for detecting if the whole or part of html element is visible

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

<a name="3.0.0"></a>

# [3.0.0](https://github.com/isaacplmann/ngx-tour) (2018-05-17)

### BREAKING CHANGES

- Require Angular 6 as peer dependency

<a name="2.1.0"></a>

# [2.1.0](https://github.com/isaacplmann/ngx-tour) (2018-02-13)

### Features

- Add options to set button text

<a name="2.0.0"></a>

# [2.0.0](https://github.com/isaacplmann/ngx-tour) (2017-11-28)

### BREAKING CHANGES

- Require Angular 5 as peer dependency

### Features

- TourService allows hotkeys to be disabled/enabled

<a name="1.1.0"></a>

# [1.1.0](https://github.com/isaacplmann/ngx-tour) (2017-10-17)

### Features

- TourService made generic but defaults to IStepOoption

<a name="1.0.3"></a>

# [1.0.3](https://github.com/isaacplmann/ngx-tour) (2017-08-09)

### Bug fixes

- Update zone.js version

<a name="1.0.2"></a>

# [1.0.2](https://github.com/isaacplmann/ngx-tour) (2017-07-20)

### Bug fixes

- Fix AoT build

<a name="1.0.1"></a>

# [1.0.1](https://github.com/isaacplmann/ngx-tour) (2017-07-19)

### Bug fixes

- Steps default to an empty array instead of undefined

<a name="1.0.0"></a>

# [1.0.0](https://github.com/isaacplmann/ngx-tour) (2017-07-18)

### BREAKING CHANGES

- Split out to a separate package
