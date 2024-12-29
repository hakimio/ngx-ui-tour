import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {ChangeDetectionStrategy, Component, ContentChild, Input} from '@angular/core';
import {PlacementConfigComponent} from './placement-config.component';
import type {IStepOption} from 'ngx-ui-tour-md-menu';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-step-config',
    templateUrl: './step-config.component.html',
    styleUrls: ['./step-config.component.scss'],
    imports: [
        HeaderComponent,
        TuiAddonDoc,
        ProxyTourAnchorDirective
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepConfigComponent {

    @Input()
    isCloseOnOutsideClickVisible = false;

    @Input()
    isIonicShowArrowVisible = false;

    @Input()
    isIonicTrapFocusVisible = false;

    @Input()
    isMdMenuShowArrowVisible = false;

    @Input()
    isUseLegacyTitleVisible = false;

    @ContentChild(PlacementConfigComponent)
    placementConfig: PlacementConfigComponent;

    readonly duplicateAnchorHandlingValues: IStepOption['duplicateAnchorHandling'][] = ['error', 'registerFirst', 'registerLast'];

}
