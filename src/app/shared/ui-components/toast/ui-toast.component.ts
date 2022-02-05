import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { fadeInOut } from '../animations/fade.animation';
import { UiToastData } from './ui-toast-data';
import { UiToastRef } from './ui-toast-ref';
import { UI_TOAST_DATA } from './ui-toast-tokens';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-toast',
    template: ` <div class="ui-toast" @fadeInOut>
        <span class="ui-toast__text">{{ data.message }}</span>
        <button class="ui-toast__button" *ngIf="data.close" (click)="close()">{{ data.close }}</button>
    </div>`,
    styleUrls: ['./ui-toast.component.scss'],
    animations: [fadeInOut],
})
export class UiToastComponent implements OnInit, OnDestroy {
    private intervalId!: ReturnType<typeof setTimeout>;

    constructor(private toastRef: UiToastRef, @Inject(UI_TOAST_DATA) readonly data: UiToastData) {}

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
    }

    ngOnInit(): void {
        if (this.data.duration) {
            this.intervalId = setTimeout(() => {
                this.close();
            }, this.data.duration);
        }
    }

    close() {
        this.toastRef.close();
    }
}
