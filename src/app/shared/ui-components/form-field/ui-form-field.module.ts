import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiFormFieldComponent, UiLabelComponent } from './ui-form-field.component';

@NgModule({
    declarations: [UiFormFieldComponent, UiLabelComponent],
    imports: [CommonModule],
    exports: [UiFormFieldComponent, UiLabelComponent],
})
export class UiFormFieldModule {}
