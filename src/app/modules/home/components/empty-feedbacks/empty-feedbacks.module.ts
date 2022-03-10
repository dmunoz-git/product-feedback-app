import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyFeedbacksComponent } from './empty-feedbacks.component';
import { EmptyFeedbacksBodyDirective, EmptyFeedbacksTitleDirective } from './empty-feedbacks.directive';

@NgModule({
    declarations: [EmptyFeedbacksComponent, EmptyFeedbacksBodyDirective, EmptyFeedbacksTitleDirective],
    imports: [CommonModule],
    exports: [EmptyFeedbacksComponent, EmptyFeedbacksBodyDirective, EmptyFeedbacksTitleDirective],
})
export class EmptyFeedbacksModule {}
