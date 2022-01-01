import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';
import { UIDropdownComponent } from './ui-dropdown.component';

@NgModule({
    declarations: [DropdownTriggerForDirective, UIDropdownComponent],
    imports: [CommonModule],
    exports: [],
})
export class UIDropdownModule {}
