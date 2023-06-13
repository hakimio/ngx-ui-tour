import {Component} from '@angular/core';

@Component({
    selector: 'app-hotkeys',
    templateUrl: './hotkeys.component.html',
    styleUrls: ['./hotkeys.component.scss']
})
export class HotkeysComponent {

    hotkeys: Hotkey[] = [{
        key: 'left arrow',
        action: 'Previous step'
    }, {
        key: 'right arrow',
        action: 'Next step'
    }, {
        key: 'esc',
        action: 'End tour'
    }];

}

interface Hotkey {
    key: string;
    action: string;
}
