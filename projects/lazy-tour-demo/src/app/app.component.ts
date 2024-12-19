import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {TourMatMenuModule} from 'ngx-ui-tour-md-menu';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TourMatMenuModule,
        MatSidenavModule,
        MatListModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ]
})
export class AppComponent {

    pages: Page[] = [{
        name: 'Home',
        path: ''
    }, {
        name: 'Module A',
        path: 'module-a'
    }, {
        name: 'Module B',
        path: 'module-b'
    }];

}

interface Page {
    name: string;
    path: string;
}
