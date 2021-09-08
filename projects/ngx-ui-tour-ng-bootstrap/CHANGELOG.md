<a name="9.0.0"></a>

# [9.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-09-08)

### Features
- New `delayAfterNavigation` config to set a delay between navigation to a different route and showing the step contents
- "Angular Ivy" partial compilation to reduce initial build time of applications using this library

### Breaking Changes
- "Angular ViewEngine" compiler is no longer supported
- Removed deprecated `waitFor` config and associated events (`startWaiting$` and `stopWaiting$`). `isAsync` should be used instead
- `preventScrolling` config was renamed to `disableScrollToAnchor` to avoid ambiguity

<a name="8.1.0"></a>

# [8.1.0](https://github.com/hakimio/ngx-ui-tour) (2021-08-30)

### Features

- New `isOptional` config used to mark tour steps which should be skipped when their anchor element is not found

<a name="8.0.0"></a>

# [8.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-05-31)

### Features

- Support Angular 12
- New `isAsync` config used to mark tour steps which anchor element is added to DOM with a delay (ie after data is loaded)

### Deprecations

- `waitFor` config was deprecated in favor of `isAsync`

<a name="7.2.0"></a>

# [7.2.0](https://github.com/hakimio/ngx-ui-tour) (2021-04-20)

### Features

- Tour step now always stays in view when backdrop is enabled and browser window is resized
- Interaction with the base page is now blocked when backdrop is enabled

### Fixes

- Fix tour backdrop position for IE11

<a name="7.1.1"></a>

# [7.1.1](https://github.com/hakimio/ngx-ui-tour) (2021-04-09)

### Fixes

- Fix wrong backdrop size and position when resizing window and backdrop is applied to multiple steps

<a name="7.1.0"></a>

# [7.1.0](https://github.com/hakimio/ngx-ui-tour) (2021-04-09)

### Features

- "enableBackdrop" option
- "waitFor" option

<a name="7.0.0"></a>

# [7.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-04-06)

### Features

- Angular 11 support
- No longer depends on commonJS "withinviewport" library
- HTML tags are now supported in step content
- Rebrand to "ngx-ui-tour"

<a name="6.1.0"></a>

# [6.1.0](https://github.com/isaacplmann/ngx-tour) (2020-08-17)

### Features

- Replaced `withinviewport()` function from 3rd party library with our own custom `isInViewport()` function to fix 
CommonJS warning in Angular 10, reduce bundle size and to remove non-peer dependency

<a name="6.0.0"></a>

# [6.0.0](https://github.com/isaacplmann/ngx-tour) (2020-08-10)

### Features

- Support Angular 10

### BREAKING CHANGES

- Require ng-bootstrap ^7.0.0

<a name="5.0.0"></a>

# [5.0.0](https://github.com/isaacplmann/ngx-tour) (2020-02-19)

### BREAKING CHANGES

- Require ng-bootstrap ^5.0.0

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
- Require ng-bootstrap 4 as peer dependency

<a name="3.0.0"></a>

# [3.0.0](https://github.com/isaacplmann/ngx-tour) (2018-05-17)

### BREAKING CHANGES

- Require Angular 6 as peer dependency
- Require ng-bootstrap 2 as peer dependency

<a name="2.0.1"></a>

# [2.0.1](https://github.com/isaacplmann/ngx-tour) (2017-04-24)

### Bug Fixes

- Clicking tourAnchor closed and re-opened the tour

<a name="2.0.0"></a>

# [2.0.0](https://github.com/isaacplmann/ngx-tour) (2017-01-31)

### Features

- Add touranchor-is-active class
- Add options to set button text

<a name="2.0.0-beta.5-2"></a>

# [2.0.0-beta.5-2](https://github.com/isaacplmann/ngx-tour) (2017-11-28)

### BREAKING CHANGE

- Require Angular 5

### Features

- Disable/enable hotkeys

<a name="2.0.0-beta.5-1"></a>

# [2.0.0-beta.5-1](https://github.com/isaacplmann/ngx-tour) (2017-10-17)

### Features

- Allow all placement options

<a name="2.0.0-beta.5"></a>

# [2.0.0-beta.5](https://github.com/isaacplmann/ngx-tour) (2017-09-19)

### BREAKING CHANGES

- Update to ng-bootstrap@1.0.0-beta.5 and bootstrap 4

<a name="1.0.6"></a>

# [1.0.6](https://github.com/isaacplmann/ngx-tour) (2017-08-10)

### Bug fixes

- Fix bundling for real this time

<a name="1.0.5"></a>

# [1.0.5](https://github.com/isaacplmann/ngx-tour) (2017-08-09)

### Bug fixes

- Fix bundling to not include ng-bootstrap library

<a name="1.0.4"></a>

# [1.0.4](https://github.com/isaacplmann/ngx-tour) (2017-08-01)

### Bug fixes

- Export TourService

<a name="1.0.3"></a>

# [1.0.3](https://github.com/isaacplmann/ngx-tour) (2017-07-20)

### Bug fixes

- Remove max-height style

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
