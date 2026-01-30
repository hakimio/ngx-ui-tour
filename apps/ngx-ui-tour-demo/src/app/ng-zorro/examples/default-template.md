```html
<tour-step-template>
    <ng-template let-step="step">
        <div class="main-container">
            @if (step?.title) {
                <div class="title-container">
                    <h2>{{ step?.title }}</h2>
                    <button
                        type="button"
                        class="close"
                        aria-label="Close"
                        (click)="tourService.end()"
                    >
                    <span
                        aria-hidden="true"
                        class="close-icon"
                    >
                        <nz-icon
                            nzType="close"
                            nzTheme="outline"
                        />
                    </span>
                    </button>
                </div>
            }
            <p
                class="card-text"
                [innerHTML]="step?.content"
            ></p>

            <div
                class="buttons"
                [class.no-progress]="!step.showProgress"
            >
                <button
                    nz-button
                    type="button"
                    class="prev"
                    [disabled]="!tourService.hasPrev(step)"
                    (click)="tourService.prev()"
                >
                    <nz-icon nzType="left" />
                    {{ step?.prevBtnTitle }}
                </button>
                @if (step.showProgress) {
                    <div class="progress">{{ tourService.steps.indexOf(step) + 1 }} / {{ tourService.steps.length }}</div>
                }
                @if (tourService.hasNext(step) && !step.nextOnAnchorClick) {
                    <button
                        nz-button
                        type="button"
                        nzType="primary"
                        class="next"
                        (click)="tourService.next()"
                    >
                        {{ step?.nextBtnTitle }}
                        <nz-icon nzType="right" />
                    </button>
                }
                @if (!tourService.hasNext(step)) {
                    <button
                        nz-button
                        type="button"
                        nzType="primary"
                        (click)="tourService.end()"
                    >
                        {{ step?.endBtnTitle }}
                    </button>
                }
            </div>
        </div>
    </ng-template>
</tour-step-template>
```
