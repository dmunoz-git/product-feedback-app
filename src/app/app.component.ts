import { Component } from '@angular/core';
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

    constructor(private toast: UIToastService) {}

    showToast() {
        this.toast.open(UIToastComponent, {
            message: 'This is a toast message',
            duration: 3000,
        });
    }
}
