import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIChipListComponent } from './chip-list/ui-chip-list.component';
import { UIChipSelectComponent } from './chip-select/ui-chip-select.component';
import { UIChipComponent } from './chip/ui-chip.component';

@NgModule({
    declarations: [UIChipComponent, UIChipListComponent, UIChipSelectComponent],
    imports: [CommonModule],
    exports: [UIChipComponent, UIChipListComponent, UIChipSelectComponent],
})
export class UIChipsModule {}
