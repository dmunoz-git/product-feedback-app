import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { UIDropdownPanel } from './ui-dropdown-panel';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-dropdown',
    templateUrl: './ui-dropdown.component.html',
    styleUrls: ['./ui-dropdown.component.scss'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [style({ opacity: 0 }), animate('.3s ease-out', style({ opacity: 1 }))]),
            transition(':leave', [animate('.3s ease-in', style({ opacity: 0 }))]),
        ]),
    ],
})
export class UIDropdownComponent implements UIDropdownPanel {
    @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
    @Output() closed: EventEmitter<void> = new EventEmitter<void>();
}
