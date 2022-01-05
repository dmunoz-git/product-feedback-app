import { Injectable } from '@angular/core';
import { UISelectPanelComponent } from './select-panel/ui-select-panel.component';

@Injectable({
    providedIn: 'root',
})
export class UiSelectService {
    private select!: UISelectPanelComponent;

    public register(select: UISelectPanelComponent) {
        this.select = select;
    }

    public getSelect(): UISelectPanelComponent {
        return this.select;
    }
}
