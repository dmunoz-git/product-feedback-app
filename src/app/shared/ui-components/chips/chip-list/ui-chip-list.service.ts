import { Injectable } from '@angular/core';
import { UIChipListComponent } from './ui-chip-list.component';

@Injectable({
    providedIn: 'root',
})
export class UiChipListService {
    private chipListRef!: UIChipListComponent;

    register(chipList: UIChipListComponent) {
        this.chipListRef = chipList;
    }

    getChipList(): UIChipListComponent {
        return this.chipListRef;
    }
}
