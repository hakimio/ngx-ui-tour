import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-styling-active-tour-anchor',
    templateUrl: './styling-active-tour-anchor.component.html',
    imports: [
        HeaderComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StylingActiveTourAnchorComponent {}
