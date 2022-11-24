import { Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip',
    template: ` <span class="ui-chip" [class.ui-chip--active]="active" [class.ui-chip--selected]="selectable" #text>
        <ng-content></ng-content>
    </span>`,
    styleUrls: ['./ui-chip.component.scss'],
})
export class UiChipComponent {
    @Input() selectable: boolean = true;
    @Input() active: boolean = false;
}
