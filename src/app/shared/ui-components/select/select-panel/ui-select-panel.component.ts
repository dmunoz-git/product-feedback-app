import { AfterViewInit, Component, ContentChildren, forwardRef, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeInOut } from '@shared/ui-components/animations/fade.animation';
import { UISelectOptionComponent } from '../select-option/ui-select-option.component';
import { UiSelectService } from '../ui-select.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select',
    templateUrl: './ui-select-panel.component.html',
    styleUrls: ['./ui-select-panel.component.scss'],
    animations: [fadeInOut],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UISelectPanelComponent),
            multi: true,
        },
    ],
})
export class UISelectPanelComponent implements AfterViewInit, ControlValueAccessor {
    @Input() selected: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;

    @ContentChildren(UISelectOptionComponent) options!: QueryList<UISelectOptionComponent>;

    selectedOption!: UISelectOptionComponent;
    displayedText: string = '';

    isDropdownOpen: boolean = false;

    constructor(private select: UiSelectService) {
        this.select.register(this);
    }

    ngAfterViewInit(): void {
        if (this.selected !== '') {
            this.setSelected();
        }
    }

    onTouchedFn = () => {};

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChangeFn = (_: any) => {};

    toggleDropdown() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.isDropdownOpen ? (this.isDropdownOpen = false) : (this.isDropdownOpen = true);
    }

    selectOption(option: UISelectOptionComponent) {
        this.selectedOption = option;
        this.selected = option.value;
        this.displayedText = this.selectedOption && this.selected !== '' ? option.textElement.nativeElement.innerText : '';
        this.isDropdownOpen = false;
        this.setSelected();
        this.onChangeFn(this.selected);
    }

    onOpened() {
        this.isDropdownOpen = true;
        this.onTouchedFn();
    }

    onClose() {
        this.isDropdownOpen = false;
    }

    setSelected() {
        this.options.forEach((opt) => (opt.selected = opt.value === this.selected));
    }

    writeValue(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
