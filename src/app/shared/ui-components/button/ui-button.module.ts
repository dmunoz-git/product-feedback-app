import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIButtonComponent } from './ui-button.component';
import { UIButtonDirective } from './ui-button.directive';

@NgModule({
    declarations: [UIButtonComponent, UIButtonDirective],
    imports: [CommonModule],
    exports: [UIButtonComponent, UIButtonDirective],
})
export class UIButtonModule {}
