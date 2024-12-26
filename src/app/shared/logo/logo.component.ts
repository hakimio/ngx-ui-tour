import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class LogoComponent {}

export const LOGO_CONTENT = new PolymorpheusComponent(LogoComponent);
