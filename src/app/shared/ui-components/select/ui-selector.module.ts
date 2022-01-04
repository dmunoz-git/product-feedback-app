import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UISelectComponent } from './field/ui-select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { UISelectOptionComponent } from './select-option/ui-select-option.component';

@NgModule({
    declarations: [UISelectComponent, UISelectOptionComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UISelectComponent, UISelectOptionComponent],
})
export class UISelectorModule {}
