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
