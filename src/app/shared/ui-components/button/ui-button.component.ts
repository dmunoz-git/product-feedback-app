import { Component, Input } from '@angular/core';

export const MAIN_CSS_CLASS = 'ui-button';
export type ButtonColors = 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'none';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'medium' | 'long' | 'none';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-button',
    template: `<button [class]="cssClasses" [ngClass]="disabled ? disabledClass : ''" [type]="type">
        <ng-content></ng-content>
    </button> `,
})
export class UIButtonComponent {
    @Input() color: ButtonColors = 'none';
    @Input() type: ButtonType = 'button';
    @Input() size: ButtonSize = 'none';
    @Input() disabled: boolean = false;

    public sizeClass: string = `${MAIN_CSS_CLASS}--${this.size}`;
    public colorClass: string = `${MAIN_CSS_CLASS}--${this.color}`;
    public disabledClass: string = `${MAIN_CSS_CLASS}--disabled`;

    get cssClasses(): string {
        return `${MAIN_CSS_CLASS} ${this.colorClass} ${this.sizeClass}`;
    }
}
