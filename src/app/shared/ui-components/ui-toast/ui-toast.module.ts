import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIToastComponent } from './ui-toast.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [UIToastComponent],
    imports: [CommonModule, OverlayModule],
    exports: [UIToastComponent],
})
export class UIToastModule {}
