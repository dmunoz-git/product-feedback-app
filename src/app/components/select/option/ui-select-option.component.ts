import { Component, ElementRef, Host, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { UiSelectPanelComponent } from '../panel/ui-select-panel.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select-option',
    template: `
    <button class="ui-select-option" [class.ui-select-option--selected]="selected" #text>
        <ng-content></ng-content><img *ngIf="selected" src="assets/images/icons/icon-check.svg" alt="" />
    </button> `,
    styleUrls: ['./ui-select-option.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UiSelectOptionComponent {
    @Input() value!: string;
    @ViewChild('text') textElement!: ElementRef;
    selected: boolean = false;

    constructor(@Optional() @Host() private panel: UiSelectPanelComponent) {}

    @HostListener('click', ['$event'])
    click() {
        this.selected = true;
        this.panel.selectOption(this);
    }
}
