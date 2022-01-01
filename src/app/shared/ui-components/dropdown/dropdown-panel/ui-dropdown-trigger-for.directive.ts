import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, HostListener, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { UIDropdownPanel } from './ui-dropdown-panel';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[uiDropdownTriggerFor]',
})
export class UIDropdownTriggerForDirective implements OnDestroy {
    @Input('uiDropdownTriggerFor') dropdownPanel!: UIDropdownPanel;

    private isDropdownOpen: boolean = false;
    private overlayRef!: OverlayRef;
    private subscription: Subscription = new Subscription();
    private dropdownClosingActionsSubscription!: Subscription;

    constructor(private overlay: Overlay, private elementRef: ElementRef<HTMLElement>, private viewContainerRef: ViewContainerRef) {}

    ngOnDestroy(): void {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }

        this.dropdownClosingActionsSubscription.unsubscribe();
    }

    @HostListener('click') toggleDropdown() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
    }

    openDropdown() {
        this.isDropdownOpen = true;
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef)
                .withPositions([
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                        offsetY: 16,
                    },
                ]),
        });

        const templatePortal = new TemplatePortal(this.dropdownPanel.templateRef, this.viewContainerRef);

        this.overlayRef.attach(templatePortal);

        this.dropdownClosingActionsSubscription = this.dropdownClosingActions().subscribe(() => this.destroyDropdown());
    }

    destroyDropdown() {
        this.subscription.unsubscribe();
        this.overlayRef.detach();
        this.isDropdownOpen = false;
    }

    private dropdownClosingActions() {
        const backdropClick$ = this.overlayRef.backdropClick();
        const detachments$ = this.overlayRef.detachments();
        const dropdownClosed = this.dropdownPanel.closed;

        return merge(backdropClick$, detachments$, dropdownClosed);
    }
}
