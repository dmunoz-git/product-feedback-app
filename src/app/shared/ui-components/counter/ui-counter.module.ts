import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UICounterComponent } from './ui-counter.component';

@NgModule({
    declarations: [UICounterComponent],
    imports: [CommonModule],
    exports: [UICounterComponent],
})
export class UICounterModule {}
