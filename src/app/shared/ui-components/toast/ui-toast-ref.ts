import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

export class UiToastRef {
    private afterClosedSubject: Subject<any> = new Subject();

    constructor(private overlayRef: OverlayRef) {}

    public close(data?: any) {
        this.overlayRef.dispose();
        this.afterClosedSubject.next(data);
        this.afterClosedSubject.complete();
    }

    public afterClosed(): Observable<any> {
        return this.afterClosedSubject.asObservable();
    }
}
