import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiCounterComponent } from './ui-counter.component';

@NgModule({
    declarations: [UiCounterComponent],
    imports: [CommonModule],
    exports: [UiCounterComponent],
})
export class UiCounterModule {}
