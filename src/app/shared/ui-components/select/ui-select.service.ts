import { Injectable } from '@angular/core';
import { UISelectComponent } from './field/ui-select.component';

@Injectable({
    providedIn: 'root',
})
export class UiSelectService {
    private select!: UISelectComponent;

    public register(select: UISelectComponent) {
        this.select = select;
    }

    public getSelect(): UISelectComponent {
        return this.select;
    }
}
