import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip',
    template: ` <span class="ui-chip" (click)="setActiveState(true)" [class.ui-chip--active]="active">
        <ng-content></ng-content>
    </span>`,
    styleUrls: ['./ui-chip.component.scss'],
})
export class UIChipComponent {
    active: boolean = false;

    setActiveState(active: boolean): void {
        this.active = active;
    }
}
