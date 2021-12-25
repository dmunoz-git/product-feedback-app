import { Component, Input, ViewEncapsulation } from '@angular/core';

const BUTTON_CSS_CLASSES = {
    primary: 'ui-button--primary',
    secondary: 'ui-button--secondary',
    info: 'ui-button--info',
    light: 'ui-button--light',
    dark: 'ui-button--dark',
    error: 'ui-button--error',
    default: '',
};

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-button',
    templateUrl: './ui-button.component.html',
    styleUrls: ['./ui-button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UIButtonComponent {
    @Input() color: 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'default' = 'default';
    @Input() type: 'button' | 'submit' | 'reset' = 'button';

    getCSSClass(color: 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'default') {
        return BUTTON_CSS_CLASSES[color];
    }
}
