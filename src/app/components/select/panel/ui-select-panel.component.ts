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
    @Input() public selected: string = '';
    @Input() public placeholder: string = '';
    @Input() public disabled: boolean = false;
    @ViewChild('trigger') public trigger!: ElementRef;
    @ContentChildren(UiSelectOptionComponent) public options!: QueryList<UiSelectOptionComponent>;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public onChangeFn = (_: any) => {};
    public onTouchedFn = () => {};

    public selectedOption!: UiSelectOptionComponent;
    public displayedText: string = '';
    public triggerRect: any = null;
    public isDropdownOpen: boolean = false;

    public ngAfterViewInit(): void {
        setTimeout(() => {
            if(this.selected !== '') {
                this.setSelected();
                this.selectedOption = this.options.find((opt) => opt.data.value === this.selected)!;
                if(this.selectedOption) {
                    this.selectedOption.data.selected = true;
                    this.displayedText = this.selectedOption.data.text;
                }
                else {
                    throw new Error('Selected option not found');
                }
            }
        });
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public toggleDropdown() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.isDropdownOpen ? this.onClose() : this.onOpened();
    }

    public selectOption(option: IUiSelectOption) {
        this.selected = option.value;
        this.displayedText = option.text;
        this.isDropdownOpen = false;
        this.setSelected();
        this.onChangeFn(this.selected);
    }

    private onOpened() {
        this.triggerRect = this.trigger?.nativeElement.getBoundingClientRect();
        this.isDropdownOpen = true;
        this.onTouchedFn();
    }

    private onClose() {
        this.isDropdownOpen = false;
    }

    private setSelected() {
        this.options.forEach((opt) => (opt.data.selected = opt.data.value === this.selected));
    }

    public writeValue(fn: any): void {
        this.displayedText = fn;
        this.selected = fn;
    }

    public registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouchedFn = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
