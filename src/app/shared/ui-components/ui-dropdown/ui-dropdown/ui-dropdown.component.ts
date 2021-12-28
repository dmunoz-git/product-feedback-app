import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-dropdown',
    templateUrl: './ui-dropdown.component.html',
    styleUrls: ['./ui-dropdown.component.scss'],
})
export class UIDropdownComponent implements OnInit, ControlValueAccessor {
    @Input() value: string = '';

    constructor() {}

    writeValue(obj: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnChange(fn: any): void {
        throw new Error('Method not implemented.');
    }
    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
    }

    ngOnInit(): void {}
}
