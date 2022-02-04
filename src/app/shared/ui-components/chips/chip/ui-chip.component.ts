import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-chip',
    template: ` <span class="ui-chip" [class.ui-chip--active]="active" [class.ui-chip--selected]="selectable" #text>
        <ng-content></ng-content>
    </span>`,
    styleUrls: ['./ui-chip.component.scss'],
})
export class UiChipComponent {
    @ViewChild('text') textElement!: ElementRef;
    @Input() selectable: boolean = true;
    @Input() value: string = '';
    @Input() active: boolean = false;
}
