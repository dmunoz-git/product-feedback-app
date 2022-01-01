import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable } from 'rxjs';

export class UIToastRef {
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
