```html
<tour-step-template>
    <ng-template let-step="step">
        <div
            [style.width]="step.stepDimensions?.width"
            [style.min-width]="step.stepDimensions?.minWidth"
            [style.max-width]="step.stepDimensions?.maxWidth"
            class="main-container"
        >
            <div class="title-container">
                <div class="title">{{ step?.title }}</div>
                <p-button
                    severity="secondary"
                    icon="pi pi-times"
                    ariaLabel="Close"
                    variant="text"
                    [rounded]="true"
                    (click)="tourService.end()"
                />
            </div>

            <p
                class="card-text"
                [innerHTML]="step.content"
            ></p>

            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <p-button
                    [disabled]="!tourService.hasPrev(step)"
                    icon="pi pi-angle-left"
                    iconPos="left"
                    severity="secondary"
                    [label]="step.prevBtnTitle"
                    (click)="tourService.prev()"
                />
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }

                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <p-button
                        icon="pi pi-angle-right"
                        iconPos="right"
                        [label]="step.nextBtnTitle"
                        (click)="tourService.next()"
                    />
                }
                @if (!tourService.hasNext(step)) {
                    <p-button
                        [label]="step.endBtnTitle"
                        (click)="tourService.end()"
                    />
                }
            </div>
        </div>
    </ng-template>
</tour-step-template>
```