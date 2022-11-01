import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '@core/http/feedback.service';
import { Feedback } from '@core/models/feedback.model';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    feedbacks$!: Observable<Feedback[]>;
    category: string = 'all';

    constructor(private feedbacks: FeedbackService, private router: Router) {
        this.feedbacks$ = feedbacks.getFeedbackList();
    }

    ngOnInit(): void {
        this.feedbacks$ = this.feedbacks.getFeedbackList();
    }

    filterFeedbacks(category: string) {
        this.category = category;
        this.feedbacks$ = category !== 'all' ? this.getFeedbacksFiltered(category) : this.feedbacks.getFeedbackList();
    }

    feebacksByStatus(status: string) {
        return this.feedbacks$.pipe(map((feedbacks) => feedbacks.filter((feedback) => feedback.status === status)));
    }

    private getFeedbacksFiltered(category: string): Observable<Feedback[]> {
        return this.feedbacks
            .getFeedbackList()
            .pipe(map((feedbacks: Feedback[]) => feedbacks.filter((feedback: Feedback) => feedback.category === category)));
    }
}
