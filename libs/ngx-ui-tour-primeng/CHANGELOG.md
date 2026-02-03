<a name="3.0.0"></a>

# [3.0.0](https://github.com/hakimio/ngx-ui-tour) (2026-02-03)

### Features
- Support for Angular 21.
- Support for PrimeNG 21.
- `TourService` is no longer provided in `root` making it tree-shakable.
- The tour UI has been tested to be compatible with Zoneless Angular applications.

### Fixes
- `.touranchor--is-active` CSS class is now correctly applied to the active anchor element.

### Breaking Changes
- `provideUiTour()` function has to be added to app or route providers to provide required services. The function accepts
  optional global tour config.
- `TourPrimeNgModule` module has been removed. Use `TourPrimeNg` standalone component bundle instead.
- `NgModule` based applications are no longer officially supported and `TourPrimeNg` standalone component bundle can
  not be used with `NgModule` imports. Instead, `NgModule` users have to import each component individually
  (`TourStepTemplateComponent`, `TourAnchorPrimeNgDirective`).
- Decorated `@Input()` properties have been replaced with `signal` input properties. Writing to those inputs directly
  will no longer work. Instead, you can use [`ComponentRef.setInput()`](https://angular.dev/api/core/ComponentRef#setInput),
  [`inputBinding()`](https://angular.dev/guide/components/programmatic-rendering#host-view-using-viewcontainerrefcreatecomponent)
  API or undocumented [`applyValueToInputSignal()`](https://github.com/angular/angular/issues/54782#issuecomment-3113918304) method.
- `TourService.setDefaults()` method has been deprecated and might be removed in the next major release.
  Use `provideUiTour()` function instead to set global tour options.
- Angular 20 is no longer supported.
- PrimeNG 20 is no longer supported.

<a name="2.0.1"></a>

# [2.0.1](https://github.com/hakimio/ngx-ui-tour) (2025-07-22)

### Fixes
- Re-export Direction, TourState and StepChangeParams from the core library

<a name="2.0.0"></a>

# [2.0.0](https://github.com/hakimio/ngx-ui-tour) (2025-06-26)

### Features
- Support for Angular 20

### Breaking Changes
- Angular 19 is no longer supported

<a name="1.0.0"></a>

# [1.0.0](https://github.com/hakimio/ngx-ui-tour) (2025-01-02)

### Features

- Initial release!
