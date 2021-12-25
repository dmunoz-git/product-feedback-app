import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip',
    templateUrl: './ui-chip.component.html',
    styleUrls: ['./ui-chip.component.scss'],
})
export class UIChipComponent {
    active: boolean = false;

    setActiveState(active: boolean): void {
        this.active = active;
    }
}
