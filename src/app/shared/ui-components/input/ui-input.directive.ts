import { Directive, HostBinding } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[uiInput]',
})
export class UiInputDirective {
    @HostBinding('class') elementClass = 'ui-input';
}
