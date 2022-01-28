import { Injectable } from '@angular/core';
import { UIChipSelectComponent } from './ui-chip-select.component';

@Injectable({
    providedIn: 'root',
})
export class UIChipSelectService {
    private chipListRef!: UIChipSelectComponent;

    register(chipList: UIChipSelectComponent) {
        this.chipListRef = chipList;
    }

    getChipList(): UIChipSelectComponent {
        return this.chipListRef;
    }
}
