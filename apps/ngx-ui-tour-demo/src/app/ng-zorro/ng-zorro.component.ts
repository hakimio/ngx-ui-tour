import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {SHARED_COMPONENTS} from '../shared';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TourNgZorro, type IStepOption, TourService} from 'ngx-ui-tour-ng-zorro';
import defaultTemplate from './examples/default-template.md' with {loader: 'text'};

@Component({
    selector: 'app-ng-zorro',
    templateUrl: './ng-zorro.component.html',
    imports: [
        TuiLink,
        TourNgZorro,
        TuiButton,
        SHARED_COMPONENTS,
        TuiAddonDoc
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgZorroComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        title: 'Welcome'
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour'
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'ng-zorro/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'ng-zorro/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'ng-zorro/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'ng-zorro/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'ng-zorro/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'ng-zorro/Misc'
    }];
    protected readonly placementValues: IStepOption['placement'][] = ['top', 'left', 'right', 'bottom', 'topLeft',
        'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'];

    protected readonly defaultTemplate = defaultTemplate;
    protected readonly tourService = inject(TourService);
    
    ngOnInit() {
        this.tourService.initialize(this.tourSteps);
    }

}
