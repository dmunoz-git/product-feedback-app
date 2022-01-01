import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-ui-selector',
    templateUrl: './ui-selector.component.html',
    styleUrls: ['./ui-selector.component.scss'],
})
export class UISelectorComponent implements OnInit {
    @Input() label!: string;
    @Input() placeholder!: string;
    @Input() selected!: string;
    @Input() required!: string;

    constructor() {}

    ngOnInit(): void {}
}
