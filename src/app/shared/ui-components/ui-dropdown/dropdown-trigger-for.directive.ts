import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, HostBinding, Input, ViewContainerRef } from '@angular/core';
import { UIDropdownComponent } from './ui-dropdown.component';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[appDropdownTriggerFor]',
})
export class DropdownTriggerForDirective {
    @Input() public dropdownPanel!: UIDropdownComponent;
    private overlayRef!: OverlayRef;
    private toggle: boolean = false;
    private viewContainerRef!: ViewContainerRef;

    constructor(private overlay: Overlay) {}

    @HostBinding(`click`) toggleDropdown() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.toggle ? this.openDropdown() : this.closeDropdown();
    }

    private openDropdown() {
        this.toggle = true;
		
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.dropdownPanel.elementRef)
                .withPositions([
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                        offsetY: 8,
                    },
                ]),
        });

        const temporalPortal = new );

        this.overlayRef.attach(temporalPortal);
    }

    private closeDropdown() {}
}
