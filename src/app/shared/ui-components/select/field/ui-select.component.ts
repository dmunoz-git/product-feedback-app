import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select',
    templateUrl: './ui-select.component.html',
    styleUrls: ['./ui-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: UISelectComponent,
            multi: true,
        },
    ],
})
export class UISelectComponent implements ControlValueAccessor {
    @Input() selected: string = '';
    @Input() placeholder: string = '';
    isDropdownOpen: boolean = false;

    onChangeFn = () => {};

    onTouchedFn = () => {};

    writeValue(obj: any): void {
        this.selected = obj;
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }

    toggleDropdown() {
        console.log(this.isDropdownOpen);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.isDropdownOpen ? (this.isDropdownOpen = false) : (this.isDropdownOpen = true);
    }
}
