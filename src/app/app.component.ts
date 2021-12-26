import { Component } from '@angular/core';
import { UIToastComponent } from './shared/ui-components/ui-toast/ui-toast.component';
import { UIToastService } from './shared/ui-components/ui-toast/ui-toast.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'product-feedback-app';
    test: boolean = false;

    value: number = 10;

    constructor(private toast: UIToastService) {}

    openToast() {
        const toastRef = this.toast.open(UIToastComponent, {
            text: 'This is a toast message',
            duration: 3000,
            close: 'Close',
        });

        toastRef.afterClosed().subscribe(() => {
            console.log('Toast closed');
        });
    }
}
