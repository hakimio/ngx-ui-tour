import {Component, inject, type OnInit} from '@angular/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {type IStepOption, TourOptimusUi, TourService} from 'ngx-ui-tour-optimus-ui';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {SHARED_COMPONENTS} from '../shared';
import defaultTemplate from './examples/default-template.md' with {loader: 'text'};

@Component({
    selector: 'app-optimus-ui-popover',
    imports: [
        TuiAddonDoc,
        TuiLink,
        TourOptimusUi,
        TuiButton,
        SHARED_COMPONENTS
    ],
    templateUrl: './optimus-ui-popover.component.html',
    styleUrl: './optimus-ui-popover.component.scss'
})
export class OptimusUiPopoverComponent implements OnInit {

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
        route: 'optimus-ui/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'optimus-ui/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'optimus-ui/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'optimus-ui/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'optimus-ui/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'optimus-ui/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'optimus-ui/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'optimus-ui/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'optimus-ui/API',
        stepDimensions: {
            maxWidth: '350px'
        }
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'optimus-ui/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'optimus-ui/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'optimus-ui/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'optimus-ui/Misc'
    }];
    readonly defaultTemplate = defaultTemplate;

    protected readonly tourService = inject(TourService);

    ngOnInit() {
        this.tourService.initialize(this.tourSteps);
    }

}
