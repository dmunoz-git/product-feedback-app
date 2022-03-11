import { Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UiSelectService } from '../ui-select.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select-option',
    template: `<button class="ui-select-option" [class.ui-select-option--selected]="selected" #text>
        <ng-content></ng-content><img *ngIf="selected" src="assets/images/icons/icon-check.svg" alt="" />
    </button> `,
    styleUrls: ['./ui-select-option.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UiSelectOptionComponent {
    @Input() value: string = '';
    @ViewChild('text') textElement!: ElementRef;
    selected: boolean = false;

    constructor(private select: UiSelectService) {}

    @HostListener('click', ['$event'])
    click() {
        this.select.getSelect().selectOption(this);
    }
}
