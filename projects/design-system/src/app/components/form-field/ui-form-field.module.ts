import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiErrorComponent, UiFormFieldComponent, UiLabelComponent } from './ui-form-field.component';

@NgModule({
    declarations: [UiFormFieldComponent, UiLabelComponent, UiErrorComponent],
    imports: [CommonModule],
    exports: [UiFormFieldComponent, UiLabelComponent, UiErrorComponent],
})
export class UiFormFieldModule {}
