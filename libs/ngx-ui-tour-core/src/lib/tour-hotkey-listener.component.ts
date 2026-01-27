import {ChangeDetectionStrategy, Component, HostListener, inject} from '@angular/core';
import {TourService, TourState} from './tour.service';


@Component({
    selector: 'tour-hotkey-listener',
    template: `<ng-content/>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourHotkeyListenerComponent {

    protected readonly tourService = inject(TourService);

    /**
     * Configures hot keys for controlling the tour with the keyboard
     */
    @HostListener('window:keydown.Escape')
    public onEscapeKey(): void {
        if (
            this.tourService.getStatus() === TourState.ON &&
            this.tourService.isHotkeysEnabled()
        ) {
            this.tourService.end();
        }
    }

    @HostListener('window:keydown.ArrowRight')
    public onArrowRightKey(): void {
        const step = this.tourService.currentStep;

        if (
            this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasNext(this.tourService.currentStep) &&
            this.tourService.isHotkeysEnabled() &&
            !step?.nextOnAnchorClick
        ) {
            this.tourService.next();
        }
    }

    @HostListener('window:keydown.ArrowLeft')
    public onArrowLeftKey(): void {
        if (
            this.tourService.getStatus() === TourState.ON &&
            this.tourService.hasPrev(this.tourService.currentStep) &&
            this.tourService.isHotkeysEnabled()
        ) {
            this.tourService.prev();
        }
    }
}
