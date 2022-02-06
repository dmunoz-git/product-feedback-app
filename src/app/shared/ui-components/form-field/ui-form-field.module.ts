import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiFormFieldComponent } from './ui-form-field.component';

@NgModule({
    declarations: [UiFormFieldComponent],
    imports: [CommonModule],
    exports: [UiFormFieldComponent],
})
export class UiFormFieldModule {}
