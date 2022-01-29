import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIChipListComponent } from './chip-list/ui-chip-list.component';
import { UIChipComponent } from './chip/ui-chip.component';

@NgModule({
    declarations: [UIChipComponent, UIChipListComponent],
    imports: [CommonModule],
    exports: [UIChipComponent, UIChipListComponent],
})
export class UIChipsModule {}
