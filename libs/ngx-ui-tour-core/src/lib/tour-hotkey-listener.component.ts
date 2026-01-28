import {Directive, HostListener} from '@angular/core';
import type {TourService} from './tour.service';
import {TourState} from './tour.service';

@Directive()
export abstract class TourHotkeyListenerComponent {

    protected abstract readonly tourService: TourService;

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
