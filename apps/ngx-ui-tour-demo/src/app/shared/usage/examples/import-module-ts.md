```ts
@NgModule({
    // ....
    imports: [
        // IMPORTANT: spread syntax here is required because of Angular bug #48089
        ...TourMatMenu
    ],
    providers: [
        provideUiTour()
    ]
})
export class AppModule {}
```
