import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UiChipListService } from '../chip-list/ui-chip-list.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip',
    template: ` <span
        class="ui-chip"
        (click)="setSelectedValue()"
        [class.ui-chip--active]="active"
        [class.ui-chip--selected]="selectable"
        #text
    >
        <ng-content></ng-content>
    </span>`,
    styleUrls: ['./ui-chip.component.scss'],
})
export class UIChipComponent {
    @ViewChild('text') textElement!: ElementRef;
    @Input() selectable: boolean = true;
    @Input() value!: string;
    @Input() key!: string;
    active!: boolean;

    constructor(private chipList: UiChipListService) {}

    setActiveState(): void {
        this.active = true;
    }

    setSelectedValue() {
        this.chipList.getChipList()?.setSelected(this);
    }

    get componentInstance(): UIChipComponent {
        return this;
    }
}
