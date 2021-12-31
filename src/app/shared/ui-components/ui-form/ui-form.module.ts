import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIInputDirective } from './ui-input/ui-input.directive';
import { TextFieldModule } from '@angular/cdk/text-field';
import { UiFieldComponent } from './ui-field/ui-field.component';

@NgModule({
    declarations: [UIInputDirective, UiFieldComponent],
    imports: [CommonModule, TextFieldModule],
    exports: [UIInputDirective],
})
export class UIFormModule {}
