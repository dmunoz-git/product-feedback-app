import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { UiSelectService } from '../ui-select.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select-option',
    templateUrl: './ui-select-option.component.html',
    styleUrls: ['./ui-select-option.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UISelectOptionComponent {
    @Input() value: string = '';

    constructor(private select: UiSelectService) {}

    @HostListener('click', ['$event'])
    click() {
        this.select.getSelect().selectOption(this);
    }
}
