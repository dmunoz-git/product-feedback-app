import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIInputDirective } from './ui-input/ui-input.directive';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
    declarations: [UIInputDirective],
    imports: [CommonModule, TextFieldModule],
    exports: [UIInputDirective],
})
export class UIFormModule {}
