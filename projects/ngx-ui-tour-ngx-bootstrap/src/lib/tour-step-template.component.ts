import {
    AfterContentInit,
    Component,
    ContentChild,
    Input,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {IStepOption, TourHotkeyListenerComponent} from 'ngx-ui-tour-core';

import {NgxbTourService} from './ngx-bootstrap-tour.service';
import {TourStepTemplateService} from './tour-step-template.service';
import {NgIf} from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tour-step-template',
    template: `
        <ng-template #tourStep let-step="step">
            <div
                [style.width]="step.stepDimensions?.width"
                [style.min-width]="step.stepDimensions?.minWidth"
                [style.max-width]="step.stepDimensions?.maxWidth"
            >
                <p class="tour-step-content" [innerHTML]="step?.content"></p>
                <div class="tour-step-navigation">
                    <button
                        *ngIf="tourService.hasPrev(step)"
                        class="btn btn-sm btn-default"
                        (click)="tourService.prev()"
                    >
                        « {{ step?.prevBtnTitle }}
                    </button>
                    <button
                        *ngIf="tourService.hasNext(step) && !step.nextOnAnchorClick"
                        class="btn btn-sm btn-default"
                        (click)="tourService.next()"
                    >
                        {{ step?.nextBtnTitle }} »
                    </button>
                    <button class="btn btn-sm btn-default" (click)="tourService.end()">
                        {{ step?.endBtnTitle }}
                    </button>
                </div>
            </div>
        </ng-template>
    `,
    imports: [
        NgIf
    ],
    standalone: true
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {

    @ViewChild('tourStep', {read: TemplateRef, static: true})
    public defaultTourStepTemplate: TemplateRef<{ step: IStepOption }>;

    @Input()
    public stepTemplate: TemplateRef<{ step: IStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

    constructor(
        private tourStepTemplateService: TourStepTemplateService,
        public tourService: NgxbTourService
    ) {
        super(tourService);
    }

    public ngAfterContentInit(): void {
        this.tourStepTemplateService.template =
            this.stepTemplate ||
            this.stepTemplateContent ||
            this.defaultTourStepTemplate;
    }
}
