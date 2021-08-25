import {Component} from '@angular/core';
import {default as onInitialize} from '!!raw-loader!./examples/on-initialize.txt';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent {

    readonly examples = {
        onInitialize
    };

    readonly events: Event[] = [{
        name: 'stepShow$',
        payload: 'IStepOption',
        description: 'A step is shown'
    }, {
        name: 'stepHide$',
        payload: 'IStepOption',
        description: 'A step is hidden'
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
