import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    forwardRef,
    Input,
    QueryList,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fadeInOut } from '@components/animations/fade.animation';
import { IUiSelectOption, UiSelectOptionComponent } from '../option/ui-select-option.component';

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
            useExisting: forwardRef(() => UiSelectPanelComponent),
            multi: true,
        },
    ],
})
export class UiSelectPanelComponent implements AfterViewInit, ControlValueAccessor {
    @Input() selected: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;
    @ViewChild('trigger') trigger!: ElementRef;

    @ContentChildren(UiSelectOptionComponent) options!: QueryList<UiSelectOptionComponent>;

    selectedOption!: UiSelectOptionComponent;
    displayedText: string = '';

    _triggerRect: any = null;

    isDropdownOpen: boolean = false;

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
        this.isDropdownOpen ? this.onClose() : this.onOpened();
    }

    selectOption(option: IUiSelectOption) {
        this.selected = option.value;
        this.displayedText = option.text;
        this.isDropdownOpen = false;
        this.setSelected();
        this.onChangeFn(this.selected);
    }

    onOpened() {
        this._triggerRect = this.trigger?.nativeElement.getBoundingClientRect();
        this.isDropdownOpen = true;
        this.onTouchedFn();
    }

    onClose() {
        this.isDropdownOpen = false;
    }

    setSelected() {
        this.options.forEach((opt) => (opt.data.selected = opt.data.value === this.selected));
    }

    writeValue(fn: any): void {
        this.displayedText = fn;
        this.selected = fn;
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
