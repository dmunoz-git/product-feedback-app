import { Directive, HostBinding } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ui-dropdown-item]',
})
export class UIDropdownItemDirective {
    @HostBinding('class') get classes(): string {
        return 'ui-dropdown-item';
    }
}
