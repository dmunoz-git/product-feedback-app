import { Component, Input } from '@angular/core';

export type JusfityType = 'start' | 'end' | 'center' | 'between' | 'around';

export const JUSTIFY_CSS_CLASES = {
    start: 'ui-toolbar--start',
    end: 'ui-toolbar--end',
    center: 'ui-toolbar--center',
    between: 'ui-toolbar--between',
    around: 'ui-toolbar--around',
};

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-toolbar',
    templateUrl: './ui-toolbar.component.html',
    styleUrls: ['./ui-toolbar.component.scss'],
})
export class UIToolbarComponent {
    @Input() justify: JusfityType = 'start';

    getJustifyClass(): string {
        return JUSTIFY_CSS_CLASES[this.justify];
    }
}
