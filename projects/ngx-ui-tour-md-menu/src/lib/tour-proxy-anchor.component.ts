import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';
import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {TourAnchorMatMenuDirective} from './tour-anchor.directive';

@Component({
    selector: 'tour-proxy-anchor',
    template: ``,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorMatMenuDirective
    ],
    hostDirectives: [{
        directive: TourAnchorMatMenuDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    // noinspection JSUnusedGlobalSymbols
    protected override readonly anchorDirective = inject(TourAnchorMatMenuDirective, {
        host: true
    });

    @Input({required: true})
    public override anchorEl: string | HTMLElement;

}
