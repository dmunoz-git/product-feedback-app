import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UISelectComponent } from './select/ui-select.component';
import { UISelectOptionComponent } from './select-option/ui-select-option.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [UISelectComponent, UISelectOptionComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UISelectComponent, UISelectOptionComponent],
})
export class UISelectorModule {}
