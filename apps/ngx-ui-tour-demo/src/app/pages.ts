import type {TuiDocRoutePages} from '@taiga-ui/addon-doc';

export const pages: TuiDocRoutePages = [{
    section: 'Tour UI Libraries',
    title: 'Material Design',
    route: 'md-menu'
}, {
    section: 'Tour UI Libraries',
    title: 'Ionic',
    route: 'ion-popover'
}, {
    section: 'Tour UI Libraries',
    title: 'PrimeNG',
    route: 'prime-ng'
}, {
    section: 'Tour UI Libraries',
    title: 'NG Bootstrap',
    route: 'ng-bootstrap'
}, {
    section: 'Tour UI Libraries',
    title: 'Taiga UI',
    subPages: [{
        section: 'Tour UI Libraries',
        title: 'Dropdown',
        route: 'tui-dropdown'
    }, {
        section: 'Tour UI Libraries',
        title: 'Hint',
        route: 'tui-hint'
    }]
}, {
    section: 'Tour UI Libraries',
    title: 'Console',
    route: 'console'
}];
