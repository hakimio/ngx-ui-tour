import {TuiIcon} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';
import {tuiClamp} from '@taiga-ui/cdk';
import {ChangeDetectionStrategy, Component, computed, contentChildren, model} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {TabComponent} from './tab.component';

@Component({
    selector: 'app-tabs',
    imports: [
        TuiTabs,
        NgTemplateOutlet,
        TuiIcon
    ],
    templateUrl: './tabs.component.html',
    styleUrl: './tabs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {

    readonly activeTabIndex = model(0);

    readonly tabs = contentChildren(TabComponent);

    readonly activeTabTpl = computed(() => {
        const tabs = this.tabs(),
            safeActiveIndex = tuiClamp(this.activeTabIndex() ?? 0, 0, tabs.length - 1),
            activeTab = tabs[safeActiveIndex];

        return activeTab.template();
    });

}
