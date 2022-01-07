import { Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UIChipComponent } from '../chip/ui-chip.component';
import { UiChipListService } from './ui-chip-list.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip-list',
    templateUrl: './ui-chip-list.component.html',
    styleUrls: ['./ui-chip-list.component.scss'],
})
export class UIChipListComponent implements ControlValueAccessor {
    @Output() selected: EventEmitter<string> = new EventEmitter();
    @ContentChildren(UIChipComponent) chips!: QueryList<UIChipComponent>;

    private value!: string;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private onChangeFn = (_fn: any) => {};
    private onTouchFn = () => {};

    constructor(private uiChipList: UiChipListService) {
        uiChipList.register(this);
    }

    setSelected(chip: UIChipComponent) {
        this.value = chip.textElement.nativeElement.innerText;
        this.setActiveElement(chip);
        this.onChangeFn(this.value);
        this.selected.emit(this.value);
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
