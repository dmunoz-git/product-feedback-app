import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-counter',
    template: `<span
        class="ui-counter"
        (click)="increment($event)"
        [class.ui-counter--active]="active"
        [class.ui-counter--row]="order === 'row'"
    >
        <img class="ui-counter__icon" src="assets/images/icons/icon-arrow-up.svg" alt="counter icon" />
        <span class="ui-counter__value">{{ value }}</span>
    </span> `,
    styleUrls: ['./ui-counter.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UiCounterComponent),
            multi: true,
        },
    ],
})
export class UiCounterComponent implements ControlValueAccessor, OnInit {
    @Input() limitCounterTo: number = -1;
    @Input() initValue: number = 0;
    @Input() activeAfterFirstClick: boolean = false;
    @Input() order: 'column' | 'row' = 'column';
    public active: boolean = false;
    public value: number = 0;

    onChange: any = () => {};

    onTouch: any = () => {};

    increment(event: any): void {
        event.preventDefault();
        event.stopPropagation();

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
