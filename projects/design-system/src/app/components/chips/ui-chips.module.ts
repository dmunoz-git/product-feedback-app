import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiChipListComponent } from './chip-list/ui-chip-list.component';
import { UiChipComponent } from './chip/ui-chip.component';

@NgModule({
    declarations: [UiChipComponent, UiChipListComponent],
    imports: [CommonModule],
    exports: [UiChipComponent, UiChipListComponent],
})
export class UiChipsModule {}
