<a name="7.0.0"></a>

# [7.0.0](https://github.com/hakimio/ngx-ui-tour) (2025-06-26)

### Features
- Support for Angular 20

### Breaking Changes
- Angular 19 is no longer supported

<a name="6.0.1"></a>

# [6.0.1](https://github.com/hakimio/ngx-ui-tour) (2025-01-02)

### Fixes
- Fix some of the step options not getting applied correctly after switching to "OnPush" change detection strategy

<a name="6.0.0"></a>

# [6.0.0](https://github.com/hakimio/ngx-ui-tour) (2024-12-30)

### Features
- Support for Angular 19

### Breaking Changes
- Angular 18 is no longer supported

<a name="5.0.0"></a>

# [5.0.0](https://github.com/hakimio/ngx-ui-tour) (2024-07-25)

### Features
- New `trapFocus` option. Disabled by default to allow focusing input elements.

### Breaking Changes
- Ionic 7 is no longer supported. v8.2.6 is the minimum supported Ionic version.

<a name="4.0.0"></a>

# [4.0.0](https://github.com/hakimio/ngx-ui-tour) (2024-06-26)

### Features
- Support for Angular 18
- New `tour-proxy-anchor` component. It can be used to target third party html elements.

### Breaking Changes
- Angular 17 is no longer supported

<a name="3.1.0"></a>

# [3.1.0](https://github.com/hakimio/ngx-ui-tour) (2024-06-06)

### Features
- Auto-detect anchor element's scroll container to fix smooth scroll issues.

### Fixes
- Fix "showArrow" option not respected when set using "tourService.setDefaults()".

<a name="3.0.3"></a>

# [3.0.3](https://github.com/hakimio/ngx-ui-tour) (2024-05-02)

### Fixes
- Fix issue preventing the tour from closing when used in "NgModule" application.
- Allow `@ionic/angular` `^8.1.0` as peer dependency

<a name="3.0.2"></a>

# [3.0.2](https://github.com/hakimio/ngx-ui-tour) (2024-01-26)

### Fixes
- Fix issue preventing the tour from starting when it was closed after navigating back, while the first step is optional and not available.

<a name="3.0.1"></a>

# [3.0.1](https://github.com/hakimio/ngx-ui-tour) (2023-12-05)

### Fixes

- Fix "Next" button position when progress display is disabled.

<a name="3.0.0"></a>

# [3.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-11-30)

### Features
- Support for Angular 17.
- New `asyncStepTimeout` config. It's now possible to have optional async steps if `asyncStepTimeout` is specified.
- Ionic standalone components are now used instead of Ionic module.
- Default step template now contains tour progress indicator. Can be disabled using `showProgress` config.

### Breaking Changes
- Angular 16 is no longer supported.
- Due to migration to Ionic standalone components, `@ionic/angular` version requirement has been set to `^7.5.6`.

<a name="2.0.6"></a>

# [2.0.6](https://github.com/hakimio/ngx-ui-tour) (2023-10-25)

### Fixes

- Fix merging deeply nested tour options like backdrop config or step dimensions

<a name="2.0.5"></a>

# [2.0.5](https://github.com/hakimio/ngx-ui-tour) (2023-10-17)

### Fixes

- Fix backdrop and scroll position when anchor element's height exceeds its scroll container's height
    
<a name="2.0.4"></a>

# [2.0.4](https://github.com/hakimio/ngx-ui-tour) (2023-09-18)

### Fixes
- Fix issue with SSR compatibility.

<a name="2.0.3"></a>

# [2.0.3](https://github.com/hakimio/ngx-ui-tour) (2023-07-13)

### Fixes
- Fix backdrop position when anchor element is on the edge of the screen and backdrop offset is greater than zero.

<a name="2.0.2"></a>

# [2.0.2](https://github.com/hakimio/ngx-ui-tour) (2023-06-23)

### Fixes
- Re-initializing the tour is no longer allowed while it's active.

<a name="2.0.1"></a>

# [2.0.1](https://github.com/hakimio/ngx-ui-tour) (2023-06-22)

### Fixes
- Fix TypeScript build errors when `strict` mode is enabled.

<a name="2.0.0"></a>

# [2.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-06-21)

### Features
- Support for Angular 16
- "Disable page scrolling" feature now uses `scrollContainer` config to determine affected container. Before
  `scrollContainer` was only used by "smooth scrolling" feature.
- New `popoverClass` config

### Fixes
- Fix smooth scroll in Ionic apps using tabs based layout

### Breaking Changes
- Angular 15 is no longer supported
- `overflow: hidden` is now used instead of `position: fixed` to disable page scrolling.
- `centerAnchorOnScroll`, `disablePageScrolling` and `smoothScroll` options are now enabled by default.

<a name="1.7.0"></a>

# [1.7.0](https://github.com/hakimio/ngx-ui-tour) (2023-04-24)

### Features
- Support for Ionic v7

<a name="1.6.0"></a>

# [1.6.0](https://github.com/hakimio/ngx-ui-tour) (2023-03-28)

### Features
- New `showArrow` config. Can be used to hide arrow in `ios` mode.
- New `tourService.setDefaults()` method which can be used to set defaults without specifying tour steps.

<a name="1.5.1"></a>

# [1.5.1](https://github.com/hakimio/ngx-ui-tour) (2023-03-14)

### Fixes
- Fix default step max-width.

- <a name="1.5.0"></a>

# [1.5.0](https://github.com/hakimio/ngx-ui-tour) (2023-03-13)

### Features
- New `allowUserInitiatedNavigation` config. Enable to keep the tour open while the user navigates to a different page.
  Can cause the tour to get "stuck" if active anchor element is removed from the DOM after the navigation.
  The option is not related to navigation initiated by the UI tour and should not be enabled in most cases.
- New `stepDimensions` config. Use it to customize tour step width, min-width and max-width. Accepts "width" CSS
  property values, ie "250px" or "auto".

<a name="1.4.0"></a>

# [1.4.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-14)

### Features
- Check not only if element is in viewport but also if it's not covered by another element when deciding whether
  to scroll the anchor element into view.

### Fixes
- Backdrop should be hidden on tour pause.
- Fix smooth scroll in Ionic apps which don't use Angular router.

<a name="1.3.1"></a>

# [1.3.1](https://github.com/hakimio/ngx-ui-tour) (2023-02-09)

### Fixes
- Fix `smoothScroll` usage in multi-route UI tours

<a name="1.3.0"></a>

# [1.3.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-08)

### Features
- New `scrollContainer` config. Can be set to CSS selector or html element reference. Only set this config if you have
  enabled `smoothScroll` and tour step description pops-up before scrolling has finished or doesn't show up at all.
  This should only be the case when scroll container is part of shadow DOM.

### Fixes
- Fix tour popover not showing-up when `smoothScroll` is enabled and the page is scrolled to reveal active tour anchor

<a name="1.2.0"></a>

# [1.2.0](https://github.com/hakimio/ngx-ui-tour) (2023-02-06)

### Features
- New `backdropConfig.parentContainer` config. Can be set to CSS selector or html element reference. Set it to fix
  backdrop stacking issues. Defaults to body.

### Fixes
- Fix backdrop on top of tour step.
- Fix incorrect step position after navigation.
- Fix step width in "ios" mode.
- Use injected `document` reference everywhere for SSR safety.

<a name="1.1.0"></a>

# [1.1.0](https://github.com/hakimio/ngx-ui-tour) (2023-01-26)

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

<a name="1.0.0"></a>

# [1.0.0](https://github.com/hakimio/ngx-ui-tour) (2023-01-10)

### Features

- Initial release!
