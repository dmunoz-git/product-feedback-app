import { Directive, Input } from '@angular/core';

export const MAIN_CSS_CLASS = 'ui-button';
export type ButtonColors = 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'none';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'medium' | 'long' | 'none';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ui-button]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'ui-button',
        '[class.ui-button--primary]': 'color === "primary"',
        '[class.ui-button--secondary]': 'color === "secondary"',
        '[class.ui-button--info]': 'color === "info"',
        '[class.ui-button--light]': 'color === "light"',
        '[class.ui-button--dark]': 'color === "dark"',
        '[class.ui-button--error]': 'color === "error"',
        '[class.ui-button--long]': 'size === "long"',
    },
})
export class UIButtonDirective {
    @Input() color: ButtonColors = 'none';
    @Input() size: ButtonSize = 'none';
}
