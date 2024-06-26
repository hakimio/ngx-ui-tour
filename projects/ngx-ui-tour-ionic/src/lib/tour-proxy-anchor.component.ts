import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';
import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {TourAnchorIonPopoverDirective} from './tour-anchor.directive';

@Component({
    selector: 'tour-proxy-anchor',
    template: ``,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorIonPopoverDirective
    ],
    hostDirectives: [{
        directive: TourAnchorIonPopoverDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    // noinspection JSUnusedGlobalSymbols
    protected override readonly anchorDirective = inject(TourAnchorIonPopoverDirective, {
        host: true
    });

    @Input({required: true})
    public override anchorEl: string | HTMLElement;

}
