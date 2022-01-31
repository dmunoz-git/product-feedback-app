import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UiChipListService {
    public readonly selectedChipKey$: Observable<string>;

    private readonly selectedChipKeySub$: ReplaySubject<string>;

    constructor() {
        this.selectedChipKeySub$ = new ReplaySubject<string>(1);

        this.selectedChipKey$ = this.selectedChipKeySub$.asObservable();
    }

    public selectChipByKey(key: string): void {
        this.selectedChipKeySub$.next(key);
    }
}
