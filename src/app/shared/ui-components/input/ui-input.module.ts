import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiInputDirective } from './ui-input.directive';

@NgModule({
    declarations: [UiInputDirective],
    imports: [CommonModule],
    exports: [UiInputDirective],
})
export class UiInputModule {}
