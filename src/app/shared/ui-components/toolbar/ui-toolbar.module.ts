import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiToolbarComponent } from './ui-toolbar.component';

@NgModule({
    declarations: [UiToolbarComponent],
    imports: [CommonModule],
    exports: [UiToolbarComponent],
})
export class UiToolbarModule {}
