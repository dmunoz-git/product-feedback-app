import { Component, Input } from '@angular/core';

export const ICONS_BASE_PATH = '/assets/images/icons';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-icon',
    templateUrl: './ui-icon.component.html',
    styleUrls: ['./ui-icon.component.scss'],
})
export class UIIconComponent {
    @Input() name!: string;
    @Input() type: 'desktop' | 'mobile' = 'desktop';

    getIconPath(): string {
        return this.type === 'desktop'
            ? `${ICONS_BASE_PATH}/icon-${this.name}.svg`
            : `${ICONS_BASE_PATH}/${this.type}/icon-${this.name}.svg`;
    }
}
