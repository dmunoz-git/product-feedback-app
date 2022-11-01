import { Component, Input } from '@angular/core';

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
})
export class UiCounterComponent {
    @Input() limitClicksTo: number = 0;
    @Input() order: 'column' | 'row' = 'column';
    @Input() active: boolean = false;
    @Input() value: number = 0;

    increment(event: any): void {
        event.preventDefault();
        event.stopPropagation();

        if (!this.active) {
            this.value++;
            this.limitClicksTo--;
            this.active = this.limitClicksTo === 0;
        }
    }

    private isPositiveInteger(value: string): boolean {
        return /^\+?\d+$/.test(value);
    }
}
