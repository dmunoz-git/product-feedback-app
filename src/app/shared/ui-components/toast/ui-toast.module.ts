import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiToastComponent } from './ui-toast.component';

@NgModule({
    declarations: [UiToastComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UiToastComponent],
})
export class UiToastModule {}
