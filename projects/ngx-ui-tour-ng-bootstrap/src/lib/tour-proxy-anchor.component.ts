import {BaseTourProxyAnchor} from 'ngx-ui-tour-core';
import {ChangeDetectionStrategy, Component, Input, inject} from '@angular/core';
import {TourAnchorNgBootstrapDirective} from './tour-anchor.directive';

@Component({
    selector: 'tour-proxy-anchor',
    template: ``,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourAnchorNgBootstrapDirective
    ],
    hostDirectives: [{
        directive: TourAnchorNgBootstrapDirective,
        inputs: ['tourAnchor: anchorId']
    }]
})
export class TourProxyAnchorComponent extends BaseTourProxyAnchor {

    // noinspection JSUnusedGlobalSymbols
    protected override readonly anchorDirective = inject(TourAnchorNgBootstrapDirective, {
        host: true
    });

    @Input({required: true})
    public override anchorEl: string | HTMLElement;

}
