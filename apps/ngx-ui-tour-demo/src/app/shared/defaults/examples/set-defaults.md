```ts
provideUiTour({
    route: '',
    disablePageScrolling: true,
    duplicateAnchorHandling: 'registerFirst',
    enableBackdrop: true,
    backdropConfig: {
        offset: 10
    }
});
this.tourService.initialize(steps, {
    route: '',
    disablePageScrolling: true
});
```
