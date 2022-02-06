import { Directive, HostBinding } from '@angular/core';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[empty-feedbacks-body]',
})
export class EmptyFeedbacksBodyDirective {
    @HostBinding('class') class = 'empty-feedbacks__body';
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[empty-feedbacks-title]',
})
export class EmptyFeedbacksTitleDirective {
    @HostBinding('class') class = 'empty-feedbacks__title';
}
