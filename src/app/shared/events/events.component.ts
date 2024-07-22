import {Component} from '@angular/core';
import {default as onInitialize} from '!!raw-loader!./examples/on-initialize.txt';
import {TuiDocCodeModule, TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {HeaderComponent} from '../header/header.component';
import {ProxyTourAnchorDirective} from '../proxy-tour-anchor.directive';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    standalone: true,
    imports: [
        ProxyTourAnchorDirective,
        HeaderComponent,
        TuiDocCodeModule,
        TuiDocDocumentationModule
    ]
})
export class EventsComponent {

    readonly examples = {
        onInitialize: onInitialize as string
    };

    readonly events: Event[] = [{
        name: 'stepShow$',
        payload: 'StepChangeParams',
        description: 'A step is shown. "Direction" property indicates if the last pressed button was "Next" or "Prev".'
    }, {
        name: 'stepHide$',
        payload: 'StepChangeParams',
        description: 'A step is hidden. "Direction" property indicates if the last pressed button was "Next" or "Prev".'
    }, {
        name: 'initialize$',
        payload: 'IStepOption[]',
        description: 'The tour is configured with a set of steps'
    }, {
        name: 'start$',
        payload: 'void',
        description: 'The tour starts'
    }, {
        name: 'end$',
        payload: 'void',
        description: 'The tour ends'
    }, {
        name: 'pause$',
        payload: 'void',
        description: 'The tour is paused'
    }, {
        name: 'resume$',
        payload: 'void',
        description: 'The tour resumes'
    }, {
        name: 'anchorRegister$',
        payload: 'string',
        description: 'An anchor is registered with the tour'
    }, {
        name: 'anchorUnregister$',
        payload: 'string',
        description: 'An anchor is unregistered from the tour'
    }];

}

interface Event {
    name: string;
    payload: string;
    description: string;
}
