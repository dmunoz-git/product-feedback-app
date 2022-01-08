import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIChipComponent } from './chip/ui-chip.component';
import { UIChipListComponent } from './chip-list/ui-chip-list.component';

@NgModule({
    declarations: [UIChipComponent, UIChipListComponent],
    imports: [CommonModule],
    exports: [UIChipComponent, UIChipListComponent],
})
export class UIChipsModule {}
