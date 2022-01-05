import { Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UiSelectService } from '../ui-select.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select-option',
    template: `<button class="ui-select-option" #text><ng-content></ng-content></button> `,
    styleUrls: ['./ui-select-option.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UISelectOptionComponent {
    @Input() value: string = '';
    @ViewChild('text') textElement!: ElementRef;

    constructor(private select: UiSelectService) {}

    @HostListener('click', ['$event'])
    click() {
        this.select.getSelect().selectOption(this);
    }
}
