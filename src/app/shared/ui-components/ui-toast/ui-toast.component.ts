import { Component, Inject } from '@angular/core';
import { UIToastData } from './ui-toast-data';
import { UIToastRef } from './ui-toast-ref';
import { TOAST_DATA } from './ui-toast-tokens';
import { transition, style, animate, trigger } from '@angular/animations';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-toast',
    templateUrl: './ui-toast.component.html',
    styleUrls: ['./ui-toast.component.scss'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [style({ opacity: 0 }), animate('.3s', style({ opacity: 1 }))]),
            transition(':leave', [animate('.3s', style({ opacity: 0 }))]),
        ]),
    ],
})
export class UIToastComponent {
    constructor(private toastRef: UIToastRef, @Inject(TOAST_DATA) readonly data: UIToastData) {}

    close() {
        this.toastRef.close();
    }
}
