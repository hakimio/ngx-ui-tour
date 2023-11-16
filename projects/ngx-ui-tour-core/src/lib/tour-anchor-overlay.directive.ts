import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostBinding, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[tourAnchorOverlay]'
})
export class TourAnchorOverlayDirective implements AfterViewInit {
    /** CSS selector to Element which should be overlayed by the tourAnchor */
    @Input() public tourAnchorOverlay: string;
    /** Padding around tourAnchor (Pixels) */
    @Input() public tourAnchorOverlayPadding: number = 0;

    @HostBinding('style.top.px') get top() { return this.boundingRect?.top }
    @HostBinding('style.left.px') get left() { return this.boundingRect?.left }
    @HostBinding('style.width.px') get width() { return this.boundingRect?.width }
    @HostBinding('style.height.px') get height() { return this.boundingRect?.height }
    @HostBinding('style.padding.px') get padding() { return this.tourAnchorOverlayPadding }
    @HostBinding('style.margin.px') get margin() { return -this.tourAnchorOverlayPadding }

    public boundingRect?: DOMRect;

    constructor(private cdr: ChangeDetectorRef, el: ElementRef) {
        el.nativeElement.style.position = 'absolute';
    }

    ngAfterViewInit(): void {
        if (this.tourAnchorOverlay) {
            let element = document.querySelector(this.tourAnchorOverlay) as HTMLElement;
            this.boundingRect = element?.getBoundingClientRect();
            this.cdr.detectChanges();
        }
    }
}