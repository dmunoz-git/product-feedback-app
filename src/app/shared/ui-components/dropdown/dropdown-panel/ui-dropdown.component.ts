import { Component, EventEmitter, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { fadeInOut } from '@shared/ui-components/animations/fade.animation';
import { UIDropdownPanel } from './ui-dropdown-panel';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ui-dropdown',
    templateUrl: './ui-dropdown.component.html',
    styleUrls: ['./ui-dropdown.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [fadeInOut],
})
export class UIDropdownComponent implements UIDropdownPanel {
    @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
    @Output() closed: EventEmitter<void> = new EventEmitter<void>();
}
