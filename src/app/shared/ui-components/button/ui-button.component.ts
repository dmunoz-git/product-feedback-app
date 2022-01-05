import { Component, Input } from '@angular/core';

export const MAIN_CSS_CLASS = 'ui-button';
export type ButtonColors = 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'none';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'medium' | 'long' | 'none';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-button',
    template: `<button class="ui-button" [ngClass]="cssClasses" [type]="type"><ng-content></ng-content></button> `,
})
export class UIButtonComponent {
    @Input() color: ButtonColors = 'none';
    @Input() type: ButtonType = 'button';
    @Input() size: ButtonSize = 'none';
    @Input() disabled: boolean = false;

    get colorClass(): string {
        return `${MAIN_CSS_CLASS}--${this.color}`;
    }

    get sizeClass(): string {
        return `${MAIN_CSS_CLASS}--${this.size}`;
    }

    get cssClasses(): string {
        return `${this.colorClass} ${this.sizeClass}`;
    }
}
