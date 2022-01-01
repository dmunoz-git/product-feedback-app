import { EventEmitter, TemplateRef } from '@angular/core';

export interface UIDropdownPanel {
    templateRef: TemplateRef<any>;
    closed: EventEmitter<void>;
}
