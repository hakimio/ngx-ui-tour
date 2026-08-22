import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

export * from './tabs.component';
export * from './tab.component';

export const TAB_COMPONENTS = [
    TabsComponent,
    TabComponent
] as const;
