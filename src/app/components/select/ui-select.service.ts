import { Injectable } from '@angular/core';
import { UiSelectPanelComponent } from './panel/ui-select-panel.component';

@Injectable({
    providedIn: 'root',
})
export class UiSelectService {
    private select!: UiSelectPanelComponent;

    public register(select: UiSelectPanelComponent) {
        this.select = select;
    }

    public getSelect(): UiSelectPanelComponent {
        return this.select;
    }
}
