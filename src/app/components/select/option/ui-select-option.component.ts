import { AfterViewInit, Component, ElementRef, Host, HostListener, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { UiSelectPanelComponent } from '../panel/ui-select-panel.component';


export interface IUiSelectOption {
    value: string;
    text: string;
    selected: boolean;
}

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
export class UiSelectOptionComponent implements AfterViewInit {
    @Input() value!: string;
    @ViewChild('text') displayText!: ElementRef;
    selected: boolean = false;

    public data: IUiSelectOption = {
        value: '',
        text: '',
        selected: false,
    };

    constructor(@Optional() @Host() private panel: UiSelectPanelComponent) {}

    ngAfterViewInit() { 
        this.data.text = this.displayText.nativeElement.innerText;
        this.data.value = this.value;
        this.selected = this.data.selected;
    }

    @HostListener('click', ['$event'])
    click() {
        this.data.selected = true;
        this.panel.selectOption(this.data);
    }
}
