import { Component, ContentChildren, QueryList } from '@angular/core';
import { UIChipComponent } from '../chip/ui-chip.component';
import { UIChipSelectService } from './ui-chip-select.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip-select',
    templateUrl: './ui-chip-select.component.html',
    styleUrls: ['./ui-chip-select.component.scss'],
})
export class UIChipSelectComponent {
    @ContentChildren(UIChipComponent) chips!: QueryList<UIChipComponent>;

    private value!: string;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private onChangeFn = (_fn: any) => {};
    private onTouchFn = () => {};

    constructor(private uiChipSelect: UIChipSelectService) {
        uiChipSelect.register(this);
    }

    setSelected(chip: UIChipComponent) {
        this.value = chip.value;
        this.setActiveElement(chip);
        this.onChangeFn(this.value);
    }

    writeValue(value: string): void {
        this.value = value;
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchFn = fn;
    }

    private setActiveElement(selectedChip: UIChipComponent) {
        this.chips.forEach((chip) => (chip.active = chip === selectedChip));
    }
}
