import {Directive, effect, ElementRef, inject, input} from '@angular/core';
import {TUI_DROPDOWN_ANCHOR, tuiAsRectAccessor, TuiRectAccessor} from '@taiga-ui/core';

let nextId = 0;

/**
 * Makes `tuiDropdown` position itself relative to the given element instead of its host.
 * Dropdown counterpart of Taiga UI's `tuiHintHost`.
 */
@Directive({
    selector: '[tuiDropdown][tourDropdownHost]',
    providers: [
        tuiAsRectAccessor(TourDropdownHostDirective),
        {provide: TUI_DROPDOWN_ANCHOR, useExisting: TourDropdownHostDirective}
    ]
})
export class TourDropdownHostDirective extends TuiRectAccessor {

    readonly tourDropdownHost = input<HTMLElement>();

    readonly type = 'dropdown';
    nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    private readonly sync = effect(() => {
        const host = this.tourDropdownHost();

        if (!host) {
            return;
        }

        const anchorName = host.dataset['tuiAnchor'] ?? `--tour-dropdown-anchor-${nextId++}`;

        this.nativeElement = host;
        host.dataset['tuiAnchor'] = anchorName;
        host.style.setProperty('anchor-name', anchorName);
    });

    getClientRect(): DOMRect {
        return this.nativeElement.getBoundingClientRect();
    }

}
