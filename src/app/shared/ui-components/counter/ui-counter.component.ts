import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-counter',
    templateUrl: './ui-counter.component.html',
    styleUrls: ['./ui-counter.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UICounterComponent),
            multi: true,
        },
    ],
})
export class UICounterComponent implements ControlValueAccessor, OnInit {
    @Input() limitCounterTo: number = -1;
    @Input() initValue: number = 0;
    @Input() activeAfterFirstClick: boolean = false;
    public active: boolean = false;
    public value: number = 0;

    onChange: any = () => {};

    onTouch: any = () => {};

    increment(): void {
        if (!this.active) {
            this.value++;
            this.onChange(this.value);
            this.writeValue(this.value);
            this.active = !this.activeAfterFirstClick ? this.value === this.limitCounterTo : true;
        } else {
            this.value = this.value < 0 ? 0 : this.value;
        }
    }

    ngOnInit(): void {
        this.value = this.initValue;
        this.onChange(this.value);
        this.writeValue(this.value);
    }

    // controlValueAccessor methods
    writeValue(value: number): void {
        this.value = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onChange = fn;
    }
}
