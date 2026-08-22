<a name="2.0.0"></a>

# [2.0.0](https://github.com/hakimio/ngx-ui-tour) (2026-06-26)

### Features
- Support for Angular 22.
- Support for NG-ZORRO 22.

### Fixes
- Disallow tour navigation while tour step animation is in progress to prevent tour step animation race conditions.
- Make sure the tour is properly disposed of when the browser back button is used to cancel it.

### Breaking Changes
- Angular 21 is no longer supported.
- Removed deprecated `TourService.setDefaults()` method. Use `provideUiTour()` instead.
- NG-ZORRO 21 is no longer supported.

# [1.0.0](https://github.com/hakimio/ngx-ui-tour) (2026-02-03)

### Features

- Initial release!
