import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    pages: Page[] = [{
        name: 'Home',
        path: 'module-app-home'
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
