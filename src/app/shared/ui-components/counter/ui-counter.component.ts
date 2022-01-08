import { Component, forwardRef, Input } from '@angular/core';
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
export class UICounterComponent implements ControlValueAccessor {
    @Input() limitCounterTo: number = -1;
    public active: boolean = false;
    public value: number = 0;

    onChange: any = () => {};

    onTouch: any = () => {};

    increment(): void {
        if (!this.active) {
            this.value++;
            this.onChange(this.value);
            this.writeValue(this.value);
            this.active = this.value === this.limitCounterTo;
        } else {
            this.value = this.value < 0 ? 0 : this.value;
        }
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
