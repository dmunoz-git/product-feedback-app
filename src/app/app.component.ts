import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UIToastComponent } from '@shared/ui-components/toast/ui-toast.component';
import { UIToastService } from '@shared/ui-components/toast/ui-toast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'product-feedback-app';
    test: boolean = false;
    testValueForm: any = {};

    testForm = this.fb.group({
        name: [],
        pizza: ['feature'],
    });

    constructor(private toast: UIToastService, private fb: FormBuilder) {}

    showToast() {
        this.toast.open(UIToastComponent, {
            message: 'This is a toast message',
            duration: 3000,
        });
    }

    onClick() {
        this.testValueForm = this.testForm.value;
    }

    showSelected(value: string) {
        console.log(value);
    }
}
