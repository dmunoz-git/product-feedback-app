import { Directive, HostBinding, Input } from '@angular/core';
import { ButtonColors, ButtonSize, MAIN_CSS_CLASS } from './ui-button.component';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[ui-button]',
})
export class UIButtonDirective {
    @Input() color: ButtonColors = 'none';
    @Input() size: ButtonSize = 'none';

    @HostBinding('class') get classes(): string {
        return `${MAIN_CSS_CLASS} ${this.colorClass} ${this.sizeClass}`;
    }

    get colorClass(): string {
        return `${MAIN_CSS_CLASS}--${this.color}`;
    }

    get sizeClass(): string {
        return `${MAIN_CSS_CLASS}--${this.size}`;
    }
}
