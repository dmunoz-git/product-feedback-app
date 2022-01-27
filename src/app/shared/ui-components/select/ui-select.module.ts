import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UISelectOptionComponent } from './select-option/ui-select-option.component';
import { UISelectPanelComponent } from './select-panel/ui-select-panel.component';

@NgModule({
    declarations: [UISelectPanelComponent, UISelectOptionComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UISelectPanelComponent, UISelectOptionComponent],
})
export class UISelectModule {}
