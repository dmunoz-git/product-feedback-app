import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIInputDirective } from './ui-input.directive';

@NgModule({
    declarations: [UIInputDirective],
    imports: [CommonModule],
    exports: [UIInputDirective],
})
export class UIInputModule {}
