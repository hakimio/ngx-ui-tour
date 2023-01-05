import {IStepOption, TourHotkeyListenerComponent} from 'ngx-ui-tour-core';
import {TourStepTemplateService} from './tour-step-template.service';
import {
    AfterContentInit,
    Component,
    ContentChild,
    Input,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {NgbTourService} from './ng-bootstrap-tour.service';
import {NgIf} from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'tour-step-template',
    template: `
        <ng-template #tourStep let-step="step">
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
        </ng-template>
    `,
    standalone: true,
    imports: [
        NgIf
    ]
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {

    @ViewChild('tourStep', {read: TemplateRef, static: true})
    public defaultTourStepTemplate: TemplateRef<any>;

    @Input()
    public stepTemplate: TemplateRef<{ step: IStepOption }>;

    @ContentChild(TemplateRef)
    public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

    constructor(
        private tourStepTemplateService: TourStepTemplateService,
        public tourService: NgbTourService
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
