import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-select-option',
    templateUrl: './ui-select-option.component.html',
    styleUrls: ['./ui-select-option.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UISelectOptionComponent implements OnInit {
    @Input() value: string = '';

    constructor() {}

    ngOnInit(): void {}
}
