import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiSelectOptionComponent } from './select-option/ui-select-option.component';
import { UiSelectPanelComponent } from './select-panel/ui-select-panel.component';

@NgModule({
    declarations: [UiSelectPanelComponent, UiSelectOptionComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UiSelectPanelComponent, UiSelectOptionComponent],
})
export class UiSelectModule {}
