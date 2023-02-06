<a name="4.2.0"></a>

# [4.2.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-06)

### Features
- New `backdropConfig.parentContainer` config. Can be set to CSS selector or html element reference. Set it to fix
  backdrop stacking issues. Defaults to body.

### Fixes
- Use injected `document` reference everywhere for SSR safety.

<a name="4.1.0"></a>

# [4.1.0](https://github.com/hakimio/ngx-ui-tour) (2023-01-26)

### Features
- New `centerAnchorOnScroll` config. Enable to keep active anchor element centered when possible. "Safari" currently
  does not support this feature.
- New `smoothScroll` config. Activate to use smooth scroll when scrolling to tour anchor element. Animations have to be
  enabled on OS level for it to work. Controlled by "Animate controls and elements inside windows" setting on Windows OS.
- New `disablePageScrolling` config. The config only disables "page-level" scroll and will not disable scroll on
  any deeply nested containers. Implementation is based on Angular CDK "BlockScrollStrategy".

### Fixes
- UI Tour now automatically ends on any navigation which was not started by the tour itself. Before only browser's back
  and forward navigation would cause the tour to end.

<a name="4.0.0"></a>

# [4.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-01-10)

### Features
- Support for Angular 15
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
- `TourTuiHintModule.forRoot()` method was removed since all services are now provided in "root". Now only the tour 
  module itself has to be imported.
- Angular 14 is no longer supported.
- RxJS v6 is no longer supported.
- `stepShow$` and `stepHide$` event payloads have changed.
- Steps marked as both `async` and `optional` at the same time will now throw an error since this option combination
  is not supported by the library.

<a name="3.3.1"></a>

# [3.3.1](https://github.com/hakimio/ngx-ui-tour) (2022-11-24)

### Fixes
- Fix compatibility with RxJS v6

<a name="3.3.0"></a>

# [3.3.0](https://github.com/hakimio/ngx-ui-tour) (2022-11-23)

### Features
- Backdrop is now resized not only on window resize but also when anchor element resizes for other reasons, ie
  navigation menu collapses or border is applied to the anchor element to distinguish active tour element.

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
