import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UISelectorComponent } from './ui-selector/ui-selector.component';

@NgModule({
    declarations: [UISelectorComponent],
    imports: [CommonModule],
    exports: [UISelectorComponent],
})
export class UISelectorModule {}
