<a name="9.0.0"></a>

# [9.0.0](https://github.com/hakimio/ngx-ui-tour) (2025-06-26)

### Features
- Support for Angular 20

### Breaking Changes
- Angular 19 is no longer supported

<a name="8.0.0"></a>

# [8.0.0](https://github.com/hakimio/ngx-ui-tour) (2024-12-30)

### Features
- Support for Angular 19
- Support for Taiga UI 4

### Breaking Changes
- Angular 18 is no longer supported
- Taiga UI 3 is no longer supported

<a name="7.0.0"></a>

# [7.0.0](https://github.com/hakimio/ngx-ui-tour) (2024-06-26)

### Features
- Support for Angular 18
- New `tour-proxy-anchor` component. It can be used to target third party html elements.

### Breaking Changes
- Angular 17 is no longer supported

<a name="6.1.0"></a>

# [6.1.0](https://github.com/hakimio/ngx-ui-tour) (2024-06-06)

### Features
- Auto-detect anchor element's scroll container to fix smooth scroll issues.

<a name="6.0.3"></a>

# [6.0.3](https://github.com/hakimio/ngx-ui-tour) (2024-05-02)

### Fixes
- Fix issue preventing the tour from closing when used in "NgModule" application.

<a name="6.0.2"></a>

# [6.0.2](https://github.com/hakimio/ngx-ui-tour) (2024-01-26)

### Fixes
- Fix issue preventing the tour from starting when it was closed after navigating back, while the first step is optional and not available.

<a name="6.0.1"></a>

# [6.0.1](https://github.com/hakimio/ngx-ui-tour) (2023-12-05)

### Fixes

- Fix "Next" button position when progress display is disabled.

<a name="6.0.0"></a>

# [6.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-11-30)

### Features
- Support for Angular 17
- New `asyncStepTimeout` config. It's now possible to have optional async steps if `asyncStepTimeout` is specified.
- Default step template now contains tour progress indicator. Can be disabled using `showProgress` config.

### Breaking Changes
- Angular 16 is no longer supported

<a name="5.0.6"></a>

# [5.0.6](https://github.com/hakimio/ngx-ui-tour) (2023-10-25)

### Fixes

- Fix merging deeply nested tour options like backdrop config or step dimensions

<a name="5.0.5"></a>

# [5.0.5](https://github.com/hakimio/ngx-ui-tour) (2023-10-17)

### Fixes

- Fix backdrop and scroll position when anchor element's height exceeds its scroll container's height
    
<a name="5.0.4"></a>

# [5.0.4](https://github.com/hakimio/ngx-ui-tour) (2023-09-18)

### Fixes
- Fix issue with SSR compatibility.

<a name="5.0.3"></a>

# [5.0.3](https://github.com/hakimio/ngx-ui-tour) (2023-07-13)

### Fixes
- Fix backdrop position when anchor element is on the edge of the screen and backdrop offset is greater than zero.

<a name="5.0.2"></a>

# [5.0.2](https://github.com/hakimio/ngx-ui-tour) (2023-06-23)

### Fixes
- Re-initializing the tour is no longer allowed while it's active.
- Default value for `delayAfterNavigation` was increased to 100ms to make sure tour anchor is registered before
  showing the tour step.

<a name="5.0.1"></a>

# [5.0.1](https://github.com/hakimio/ngx-ui-tour) (2023-06-22)

### Fixes
- Fix TypeScript build errors when `strict` mode is enabled.

<a name="5.0.0"></a>

# [5.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-06-21)

### Features
- Support for Angular 16
- "Disable page scrolling" feature now uses `scrollContainer` config to determine affected container. Before
  `scrollContainer` was only used by "smooth scrolling" feature.
- New `backdropConfig.offset` config
- New `popoverClass` config

### Fixes
- Fix "Prev"/"Next" button padding

### Breaking Changes
- Angular 15 is no longer supported
- `overflow: hidden` is now used instead of `position: fixed` to disable page scrolling.
- `centerAnchorOnScroll`, `disablePageScrolling` and `smoothScroll` options are now enabled by default.

<a name="4.6.1"></a>

# [4.6.1](https://github.com/hakimio/ngx-ui-tour) (2023-04-24)

### Fixes
- Fix compatibility with Taiga UI v3.24

<a name="4.6.0"></a>

# [4.6.0](https://github.com/hakimio/ngx-ui-tour) (2023-03-28)

### Features
- New `tourService.setDefaults()` method which can be used to set defaults without specifying tour steps.

<a name="4.5.1"></a>

# [4.5.1](https://github.com/hakimio/ngx-ui-tour) (2023-03-14)

### Fixes
- Fix default step max-width.

<a name="4.5.0"></a>

# [4.5.0](https://github.com/hakimio/ngx-ui-tour) (2023-03-13)

### Features
- New `allowUserInitiatedNavigation` config. Enable to keep the tour open while the user navigates to a different page.
  Can cause the tour to get "stuck" if active anchor element is removed from the DOM after the navigation.
  The option is not related to navigation initiated by the UI tour and should not be enabled in most cases.
- New `stepDimensions` config. Use it to customize tour step width, min-width and max-width. Accepts "width" CSS
  property values, ie "250px" or "auto".

<a name="4.4.0"></a>

# [4.4.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-14)

### Features
- Check not only if element is in viewport but also if it's not covered by another element when deciding whether
  to scroll the anchor element into view.

### Fixes
- Backdrop should be hidden on tour pause.

<a name="4.3.0"></a>

# [4.3.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-08)

### Features
- New `scrollContainer` config. Can be set to CSS selector or html element reference. Only set this config if you have
  enabled `smoothScroll` and tour step description pops-up before scrolling has finished or doesn't show up at all.
  This should only be the case when scroll container is part of shadow DOM.

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
- `TourTuiDropdownModule.forRoot()` method was removed since all services are now provided in "root". Now only the 
  tour module itself has to be imported.
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

### Fixes

- Fix backdrop showing over the `tui-dropdown` when using latest Taiga UI version 

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

<a name="1.0.1"></a>

# [1.0.1](https://github.com/hakimio/ngx-ui-tour) (2021-09-23)

### Fixes

- Switched back to "View Engine" compilation mode to fix Angular v11 and older builds

<a name="1.0.0"></a>

# [1.0.0](https://github.com/hakimio/ngx-ui-tour) (2021-09-20)

### Features

- Initial release!
