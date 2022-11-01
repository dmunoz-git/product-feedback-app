import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ui-badge]',
})
export class UiBadgeDirective implements OnChanges, OnDestroy {
    @Input() value!: number;

    private badgeElement: HTMLElement | null = null;
    private regex = new RegExp(/^[0-9]\d*$/);

    constructor(@Inject(DOCUMENT) private document: Document, private elRef: ElementRef<HTMLElement>) {}

    ngOnChanges(changes: SimpleChanges): void {
        if ('value' in changes) {
            const value = `${changes['value'].currentValue}`.trim();
            if (value?.length > 0 && this.regex.test(value)) {
                this.updateBadge(value);
            } else {
                this.updateBadge('0');
            }
        }
    }

    ngOnDestroy(): void {
        if (this.badgeElement) {
            this.elRef.nativeElement.removeChild(this.badgeElement);
            this.badgeElement.remove();
        }
    }

    private createBadge(value: string): HTMLElement {
        const badge = this.document.createElement('span');
        badge.classList.add('ui-badge');
        badge.textContent = value;
        this.elRef.nativeElement.classList.add('ui-badge-container'); // add class to parent element
        this.elRef.nativeElement.appendChild(badge); // add badge to parent element
        return badge;
    }

    private updateBadge(value: string): void {
        if (!this.badgeElement) {
            this.badgeElement = this.createBadge(value);
        } else {
            this.badgeElement.textContent = value;
        }
    }
}
