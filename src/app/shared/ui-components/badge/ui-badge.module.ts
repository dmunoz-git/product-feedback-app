import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIBadgeDirective } from './ui-badge.directive';

@NgModule({
    declarations: [UIBadgeDirective],
    imports: [CommonModule],
    exports: [UIBadgeDirective],
})
export class UIBadgeModule {}
