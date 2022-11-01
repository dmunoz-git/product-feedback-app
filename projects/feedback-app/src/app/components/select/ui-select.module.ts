import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiSelectOptionComponent } from './ui-select-option.component';
import { UiSelectPanelComponent } from './ui-select-panel.component';

@NgModule({
    declarations: [UiSelectPanelComponent, UiSelectOptionComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UiSelectPanelComponent, UiSelectOptionComponent],
})
export class UiSelectModule {}
