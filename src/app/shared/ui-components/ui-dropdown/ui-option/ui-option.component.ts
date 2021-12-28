import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-option',
    templateUrl: './ui-option.component.html',
    styleUrls: ['./ui-option.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UIOptionComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
