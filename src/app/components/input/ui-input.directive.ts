import { Directive } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[uiInput]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'ui-input',
    },
})
export class UiInputDirective {}
