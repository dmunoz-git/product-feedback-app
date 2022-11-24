import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedbackCardComponent } from './feedback-card.component';
import {
    FeedbackCardContentDirective,
    FeedbackCardFooterDirective,
    FeedbackCardSideDirective,
    FeedbackCardTitleDirective,
} from './feeed-card.directive';

@NgModule({
    declarations: [
        FeedbackCardComponent,
        FeedbackCardContentDirective,
        FeedbackCardFooterDirective,
        FeedbackCardTitleDirective,
        FeedbackCardSideDirective,
    ],
    imports: [CommonModule],
    exports: [
        FeedbackCardComponent,
        FeedbackCardContentDirective,
        FeedbackCardFooterDirective,
        FeedbackCardTitleDirective,
        FeedbackCardSideDirective,
    ],
})
export class UiFeedbackCardModule {}
