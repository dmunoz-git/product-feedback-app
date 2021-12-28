import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIDropdownDirective } from './ui-dropdown.directive';
import { UIDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { UIOptionComponent } from './ui-option/ui-option.component';

@NgModule({
    declarations: [UIDropdownDirective, UIDropdownComponent, UIOptionComponent],
    imports: [CommonModule],
    exports: [UIDropdownDirective, UIDropdownComponent, UIOptionComponent],
})
export class UIDropdownModule {}
