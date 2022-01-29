import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { UIChipComponent } from '../chip/ui-chip.component';
import { UiChipListService } from './ui-chip-list.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip-list',
    templateUrl: './ui-chip-list.component.html',
    styleUrls: ['./ui-chip-list.component.scss'],
})
export class UIChipListComponent implements AfterViewInit {
    @Output() selected: EventEmitter<string> = new EventEmitter();
    @Input() initialSelected!: string;
    @ContentChildren(UIChipComponent) chips!: QueryList<UIChipComponent>;

    private value!: string;

    constructor(private uiChipList: UiChipListService) {
        uiChipList.register(this);
    }

    ngAfterViewInit(): void {
        this.chips.find((chip) => chip.key === this.initialSelected)?.setActiveState();
    }

    setSelected(chip: UIChipComponent) {
        this.value = chip.key;
        this.setActiveElement(chip);
        this.selected.emit(this.value);
    }

    private setActiveElement(selectedChip: UIChipComponent) {
        this.chips.forEach((chip) => (chip.active = chip === selectedChip));
    }
}
