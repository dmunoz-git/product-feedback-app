import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeedbackService } from 'src/app/core/http/feedback.service';
import { Feedback } from 'src/app/core/models/feedback.model';

@Component({
    selector: 'app-suggestions-layout',
    templateUrl: './suggestions-layout.component.html',
    styleUrls: ['./suggestions-layout.component.scss'],
})
export class SuggestionsLayoutComponent implements OnInit {
    feedbacks$!: Observable<Feedback[]>;

    constructor(private feedbacks: FeedbackService) {
        this.feedbacks$ = feedbacks.getFeedbackList();
    }

    ngOnInit(): void {
        this.feedbacks$ = this.feedbacks.getFeedbackList();
    }

    filter(category: string) {
        this.feedbacks$ = category !== 'all' ? this.getFeedbacksFiltered(category) : this.feedbacks.getFeedbackList();
    }

    private getFeedbacksFiltered(category: string): Observable<Feedback[]> {
        return this.feedbacks
            .getFeedbackList()
            .pipe(map((feedbacks: Feedback[]) => feedbacks.filter((feedback: Feedback) => feedback.category === category)));
    }
}
