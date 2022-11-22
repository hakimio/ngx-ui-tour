<a name="3.2.1"></a>

# [3.2.1](https://github.com/hakimio/ngx-ui-tour) (2022-11-21)

### Fixes
- Fix TypeScript production build error (#82)

<a name="3.2.0"></a>

# [3.2.0](https://github.com/hakimio/ngx-ui-tour) (2022-11-21)

### Features
- Custom `StepOption` interface can now be provided when extending `TourService` class from one of the UI libraries

<a name="3.1.0"></a>

# [3.1.0](https://github.com/hakimio/ngx-ui-tour) (2022-10-24)

### Features
- New `backdropConfig` step config to configure backdrop `zIndex` and `backgroundColor`

### Fixes
- Tour should close when user navigates to a different page using browser's back/forward navigation

<a name="3.0.0"></a>

# [3.0.0](https://github.com/hakimio/ngx-ui-tour) (2022-09-02)

### Features
- Support for Angular 14 and Taiga UI 3
- Navigation to next step with right arrow key is now disabled when current step has `nextOnAnchorClick` option enabled.

### Fixes
- When `nextOnAnchorClick` step option is enabled, it should only start listening to anchor click event after
  checking if the anchor element has been registered.

### Breaking changes
- `goToNextOnAnchorClick` step config was renamed to `nextOnAnchorClick`
- Angular 13 and lower versions are no longer supported
- Taiga UI 2 is no longer supported

<a name="2.1.2"></a>

# [2.1.2](https://github.com/hakimio/ngx-ui-tour) (2022-06-22)

### Fixes

- Fix backdrop not expanding to full height in some cases

<a name="2.1.1"></a>

# [2.1.1](https://github.com/hakimio/ngx-ui-tour) (2022-06-21)

### Fixes

- Fix backdrop position updating

<a name="2.1.0"></a>

# [2.1.0](https://github.com/hakimio/ngx-ui-tour) (2022-06-21)

### Features

- New `goToNextOnAnchorClick` config which can be used to go to the next step by clicking on anchor element instead
  of "Next" button. Implemented by Luca Oliano (@lucaoliano).

<a name="2.0.1"></a>

# [2.0.1](https://github.com/hakimio/ngx-ui-tour) (2022-02-21)

### Fixes

- Fixed optional steps in the beginning or end of the tour

<a name="2.0.0"></a>

# [2.0.0](https://github.com/hakimio/ngx-ui-tour) (2022-01-28)

### Features

- Support Angular 13 and RxJS v7
- "Ivy" partial compilation mode
- "ngx-ui-tour-core" is now a "hard" dependency and doesn't need to be installed separately

### Breaking changes
- Due to "Ivy" partial compilation mode, Angular versions below v12 are no longer supported

<a name="1.0.2"></a>

# [1.0.2](https://github.com/hakimio/ngx-ui-tour) (2021-09-23)

### Fixes

- Switched back to "View Engine" compilation mode to fix Angular v11 and older builds

<a name="1.0.1"></a>

# [1.0.1](https://github.com/hakimio/ngx-ui-tour) (2021-09-23)

### Fixes

- Fix content font size

<a name="1.0.0"></a>

# [1.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-09-22)

### Features

- Initial release!
