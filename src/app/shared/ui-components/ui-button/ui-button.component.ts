import { Component, Input } from '@angular/core';

type UIButtonColors = 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'default';
type UIButtonType = 'button' | 'submit' | 'reset';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-button',
    templateUrl: './ui-button.component.html',
    styleUrls: ['./ui-button.component.scss'],
})
export class UIButtonComponent {
    @Input() color: UIButtonColors = 'default';
    @Input() type: UIButtonType = 'button';
}
