import {
    IStepOption,
    TourAnchorNgxBootstrapDirective,
    TourNgxBootstrapModule,
    TourService
} from 'ngx-ui-tour-ngx-bootstrap';
import {Component, inject, OnInit} from '@angular/core';
import {default as defaultTemplate} from '!!raw-loader!./examples/default-template.txt';
import {DELAY_AFTER_NAVIGATION} from '../app.providers';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDocCodeModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {provideTourDirective, SHARED_COMPONENTS} from '../shared';

@Component({
    selector: 'app-ngx-bootstrap',
    templateUrl: './ngx-bootstrap.component.html',
    styleUrls: ['./ngx-bootstrap.component.scss'],
    standalone: true,
    imports: [
        TuiDocPageModule,
        TuiLinkModule,
        TourNgxBootstrapModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiDocCodeModule,
        SHARED_COMPONENTS
    ],
    providers: [
        provideTourDirective(TourAnchorNgxBootstrapDirective)
    ]
})
export class NgxBootstrapComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        placement: 'bottom',
        title: 'Welcome',
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour'
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'ngx-bootstrap/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'ngx-bootstrap/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'ngx-bootstrap/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.popoverClass',
        content: 'You can add custom popover class.',
        title: 'Custom CSS Class',
        popoverClass: 'custom-tour-class',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'ngx-bootstrap/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'ngx-bootstrap/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'ngx-bootstrap/Misc'
    }];
    readonly bootstrapScssImport = '@import "bootstrap/scss/bootstrap";';
    readonly defaultTemplate = defaultTemplate as string;

    public readonly tourService = inject(TourService);
    private readonly delayAfterNavigation = inject(DELAY_AFTER_NAVIGATION);

    ngOnInit() {
        this.tourService.initialize(
            this.tourSteps,
            {
                route: 'ngx-bootstrap',
                delayAfterNavigation: this.delayAfterNavigation
            }
        );
    }

}
