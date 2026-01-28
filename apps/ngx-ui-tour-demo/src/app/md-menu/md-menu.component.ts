import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import type {IStepOption} from 'ngx-ui-tour-md-menu';
import {TourAnchorMatMenuDirective, TourMatMenu, TourService} from 'ngx-ui-tour-md-menu';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButton, TuiLink, TuiNotification} from '@taiga-ui/core';
import {provideTourDirective, SHARED_COMPONENTS} from '../shared';
import defaultTemplate from './examples/default-template.md' with {loader: 'text'};

@Component({
    selector: 'app-md-menu',
    templateUrl: './md-menu.component.html',
    styleUrls: ['./md-menu.component.scss'],
    imports: [
        TuiAddonDoc,
        TuiLink,
        TourMatMenu,
        TuiButton,
        TuiNotification,
        SHARED_COMPONENTS
    ],
    providers: [
        provideTourDirective(TourAnchorMatMenuDirective)
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdMenuComponent implements OnInit {

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
        route: 'md-menu/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'md-menu/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'md-menu/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'md-menu/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'md-menu/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'md-menu/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'md-menu/Misc'
    }];
    readonly defaultTemplate = defaultTemplate;

    public readonly tourService = inject(TourService);

    ngOnInit() {
        this.tourService.initialize(this.tourSteps);
    }

}
