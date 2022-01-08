import { Component, ElementRef, ViewChild } from '@angular/core';
import { UiChipListService } from '../chip-list/ui-chip-list.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip',
    template: ` <span class="ui-chip" (click)="setSelectedValue()" [class.ui-chip--active]="active" #text>
        <ng-content></ng-content>
    </span>`,
    styleUrls: ['./ui-chip.component.scss'],
})
export class UIChipComponent {
    @ViewChild('text') textElement!: ElementRef;
    active: boolean = false;

    constructor(private chipList: UiChipListService) {}

    setActiveState(active: boolean): void {
        this.active = active;
    }

    setSelectedValue() {
        const chipListRef = this.chipList.getChipList();
        if (chipListRef) {
            chipListRef.setSelected(this);
        }
    }
}
