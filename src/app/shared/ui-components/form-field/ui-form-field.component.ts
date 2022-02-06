import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-form-field',
    templateUrl: './ui-form-field.component.html',
    styleUrls: ['./ui-form-field.component.scss'],
})
export class UiFormFieldComponent {
    @Input() size: 'fluent' | 'default' = 'default';
}
