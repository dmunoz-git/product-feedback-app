import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { UiToastData } from './ui-toast-data';
import { UiToastRef } from './ui-toast-ref';
import { Ui_TOAST_DATA } from './ui-toast-tokens';

@Injectable({
    providedIn: 'root',
})
export class UiToastService {
    constructor(private overlay: Overlay, private injector: Injector) {}

    open<UiToastComponent>(component: ComponentType<UiToastComponent>, data: UiToastData) {
        const positionStrategy = this.overlay.position().global().centerHorizontally().bottom();

        const overlayRef = this.overlay.create({
            positionStrategy,
        });

        const toastRef = new UiToastRef(overlayRef);

        const injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: UiToastRef, useValue: toastRef },
                { provide: Ui_TOAST_DATA, useValue: data },
            ],
        });

        const portal = new ComponentPortal(component, null, injector);
        overlayRef.attach(portal);

        return toastRef;
    }
}
