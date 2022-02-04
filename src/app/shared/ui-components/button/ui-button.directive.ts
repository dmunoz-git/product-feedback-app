import { Directive, Input } from '@angular/core';

export type ButtonColors = 'primary' | 'secondary' | 'light' | 'dark' | 'error' | 'default';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'long' | 'default';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ui-button]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'ui-button',
        '[class.ui-button--primary]': 'color === "primary"',
        '[class.ui-button--secondary]': 'color === "secondary"',
        '[class.ui-button--dark]': 'color === "dark"',
        '[class.ui-button--light]': 'color === "light"',
        '[class.ui-button--error]': 'color === "error"',
        '[class.ui-button--long]': 'size === "long"',
    },
})
export class UIButtonDirective {
    @Input() color: ButtonColors = 'default';
    @Input() size: ButtonSize = 'default';
}
