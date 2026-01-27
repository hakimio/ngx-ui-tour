import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {TourMatMenu} from 'ngx-ui-tour-md-menu';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        TourMatMenu
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

    protected readonly animals = ['Dog', 'Cat', 'Lion', 'Cow', 'Bird', 'Rabbit', 'Leopard', 'Camel', 'Bear', 'Deer',
        'Fox', 'Pig', 'Goat', 'Horse', 'Zebra', 'Giraffe', 'Donkey'] as const;
    protected readonly animalTourAnchorMap: Partial<Record<typeof this.animals[number], string>> = {
        Cow: 'cow-menu-item',
        Donkey: 'donkey-menu-item'
    };

}
