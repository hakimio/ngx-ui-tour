```ts
@Injectable()
export class MyTourService {

    constructor(
        private readonly tourService: TourService
    ) {}

    private readonly MAIN_SECTION_CSS_SELECTOR = 'section.main-content';
    private readonly NO_SCROLL_CSS_CLASS = 'no-scroll';

    start(steps: IStepOption[]) {
        this.tourService.initialize(steps, {
            route: 'my-route',
            enableBackdrop: true
        });
        this.tourService.end$.subscribe(() => this.setIsScrollable(true));
        this.setIsScrollable(false);
        this.tourService.start();
    }

    private setIsScrollable(isScrollable: boolean) {
        const body = document.body,
        mainSection = document.querySelector(this.MAIN_SECTION_CSS_SELECTOR),
        addOrRemove = isScrollable ? 'remove' : 'add';

        mainSection.classList[addOrRemove](this.NO_SCROLL_CSS_CLASS);
        // You can also optionally disable iOS Safari bounce effect
        body[addOrRemove + 'EventListener']('touchmove', this.preventTouchMove, { passive: false });
    }

    private preventTouchMove(e) {
        e.preventDefault();
    }

}
```
