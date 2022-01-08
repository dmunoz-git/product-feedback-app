import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UISelectPanelComponent } from './select-panel/ui-select-panel.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { UISelectOptionComponent } from './select-option/ui-select-option.component';

@NgModule({
    declarations: [UISelectPanelComponent, UISelectOptionComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UISelectPanelComponent, UISelectOptionComponent],
})
export class UISelectorModule {}
