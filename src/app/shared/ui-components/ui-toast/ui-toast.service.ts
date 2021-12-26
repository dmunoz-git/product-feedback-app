import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { UIToastData } from './ui-toast-data';
import { UIToastRef } from './ui-toast-ref';
import { TOAST_DATA } from './ui-toast-tokens';

@Injectable({
    providedIn: 'root',
})
export class UIToastService {
    constructor(private overlay: Overlay, private injector: Injector) {}

    open<UIToastComponent>(component: ComponentType<UIToastComponent>, data: UIToastData) {
        const positionStrategy = this.overlay.position().global().centerHorizontally().bottom();

        const overlayRef = this.overlay.create({
            positionStrategy,
        });

        const toastRef = new UIToastRef(overlayRef);

        const injector = Injector.create({
            parent: this.injector,
            providers: [
                { provide: UIToastRef, useValue: toastRef },
                { provide: TOAST_DATA, useValue: data },
            ],
        });

        const portal = new ComponentPortal(component, null, injector);
        overlayRef.attach(portal);

        return toastRef;
    }
}
