import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIChipComponent } from './chip/ui-chip.component';

@NgModule({
    declarations: [UIChipComponent],
    imports: [CommonModule],
    exports: [UIChipComponent],
})
export class UIChipsModule {}
