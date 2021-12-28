import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'product-feedback-app';
    test: boolean = false;

    value: number = 10;
    badgeValue: number = 9;

    form = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
    });

    constructor(private fb: FormBuilder) {}
}
