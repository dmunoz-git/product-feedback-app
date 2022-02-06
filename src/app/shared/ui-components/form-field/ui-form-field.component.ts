import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-label',
    template: `<span class="ui-label"><ng-content></ng-content></span>`,
    styles: [
        `
            @use 'settings/colors';

            .ui-label {
                font-size: 0.875rem;
                color: colors.$text-color;
                margin: 1rem 0;
            }
        `,
    ],
})
export class UiLabelComponent {}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-form-field',
    templateUrl: './ui-form-field.component.html',
    styleUrls: ['./ui-form-field.component.scss'],
})
export class UiFormFieldComponent {
    @Input() size: 'fluent' | 'default' = 'default';
}
