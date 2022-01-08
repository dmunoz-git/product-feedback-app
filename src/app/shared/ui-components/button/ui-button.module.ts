import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIButtonDirective } from './ui-button.directive';

@NgModule({
    declarations: [UIButtonDirective],
    imports: [CommonModule],
    exports: [UIButtonDirective],
})
export class UIButtonModule {}
