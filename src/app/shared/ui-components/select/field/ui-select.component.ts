import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { UISelectOptionComponent } from '../select-option/ui-select-option.component';
import { UiSelectService } from '../ui-select.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select',
    templateUrl: './ui-select.component.html',
    styleUrls: ['./ui-select.component.scss'],
})
export class UISelectComponent {
    @Input() selected: string = '';
    @Input() placeholder: string = '';

    @ContentChildren(UISelectOptionComponent) options!: QueryList<UISelectOptionComponent>;

    selectedOption!: UISelectOptionComponent;
    displayedText: string = '';

    isDropdownOpen: boolean = false;

    constructor(private select: UiSelectService) {
        this.select.register(this);
    }

    toggleDropdown() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.isDropdownOpen ? (this.isDropdownOpen = false) : (this.isDropdownOpen = true);
    }

    selectOption(option: UISelectOptionComponent) {
        console.log(option);
        this.selectedOption = option;
        this.selected = option.value;
        this.displayedText = this.selectedOption ? option.value : '';
        this.isDropdownOpen = false;
    }
}
