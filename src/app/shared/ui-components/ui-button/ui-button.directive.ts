import { Directive, HostBinding, Input } from '@angular/core';

const MAIN_CSS_CLASS = 'ui-button';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ui-button]',
})
export class UIButtonDirective {
    @Input() color: 'primary' | 'secondary' | 'info' | 'light' | 'dark' | 'error' | 'default' = 'default';

    @HostBinding('class') get classes(): string {
        if (this.color !== 'default') {
            return `${MAIN_CSS_CLASS} ui-button--${this.color}`;
        }

        return MAIN_CSS_CLASS;
    }
}
