import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { UIToastData } from './ui-toast-data';
import { UIToastRef } from './ui-toast-ref';
import { UI_TOAST_DATA } from './ui-toast-tokens';
import { fadeInOut } from '../animations/fade.animation';

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
export class UIToastComponent implements OnInit, OnDestroy {
    private intervalId!: ReturnType<typeof setTimeout>;

    constructor(private toastRef: UIToastRef, @Inject(UI_TOAST_DATA) readonly data: UIToastData) {}

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
