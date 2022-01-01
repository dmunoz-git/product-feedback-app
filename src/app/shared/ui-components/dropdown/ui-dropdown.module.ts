import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIDropdownComponent } from './dropdown-panel/ui-dropdown.component';
import { UIDropdownTriggerForDirective } from './dropdown-panel/ui-dropdown-trigger-for.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { UIDropdownItemDirective } from './dropdown-item/ui-dropdown-item.directive';

@NgModule({
    declarations: [UIDropdownComponent, UIDropdownTriggerForDirective, UIDropdownItemDirective],
    imports: [CommonModule, OverlayModule],
    exports: [UIDropdownComponent, UIDropdownTriggerForDirective, UIDropdownItemDirective],
})
export class UIDropdownModule {}
