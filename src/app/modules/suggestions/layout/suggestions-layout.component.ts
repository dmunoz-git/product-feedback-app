import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackService } from 'src/app/core/http/feedback.service';
import { Feedback } from 'src/app/core/models/feedback.model';

@Component({
    selector: 'app-suggestions-layout',
    templateUrl: './suggestions-layout.component.html',
    styleUrls: ['./suggestions-layout.component.scss'],
})
export class SuggestionsLayoutComponent {
    feedbacks$!: Observable<Feedback[]>;
    feedbacksLength: number = 0;

    constructor(private feedbacks: FeedbackService) {
        this.feedbacks$ = feedbacks.getFeedbackList();
    }
}
