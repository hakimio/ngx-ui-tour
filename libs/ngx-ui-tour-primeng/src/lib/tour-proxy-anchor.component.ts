import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TourAnchorPrimeNgDirective} from './tour-anchor.directive';
import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';

@Component({
    selector: 'tour-proxy-anchor',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [{
        directive: TourAnchorPrimeNgDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    protected override readonly anchorDirective = inject(TourAnchorPrimeNgDirective, {
        host: true
    });

    @Input({required: true})
    public override anchorEl!: string | HTMLElement;

}
