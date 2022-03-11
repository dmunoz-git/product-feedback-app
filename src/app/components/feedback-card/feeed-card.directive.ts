import { Directive, HostBinding } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[feedback-card-side]',
})
export class FeedbackCardSideDirective {
    @HostBinding('class') class = 'feedback-card__aside';
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[feedback-card-title]',
})
export class FeedbackCardTitleDirective {
    @HostBinding('class') class = 'feedback-card__title';
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[feedback-card-content]',
})
export class FeedbackCardContentDirective {
    @HostBinding('class') class = 'feedback-card__content';
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[feedback-card-footer]',
})
export class FeedbackCardFooterDirective {
    @HostBinding('class') class = 'feedback-card__footer';
}
