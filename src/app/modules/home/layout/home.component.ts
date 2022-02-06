import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FeedbackService } from 'src/app/core/http/feedback.service';
import { Feedback } from 'src/app/core/models/feedback.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    feedbacks$!: Observable<Feedback[]>;

    constructor(private feedbacks: FeedbackService, private router: Router) {
        this.feedbacks$ = feedbacks.getFeedbackList();
    }

    ngOnInit(): void {
        this.feedbacks$ = this.feedbacks.getFeedbackList();
    }

    filterFeedbacks(category: string) {
        this.feedbacks$ = category !== 'all' ? this.getFeedbacksFiltered(category) : this.feedbacks.getFeedbackList();
    }

    private getFeedbacksFiltered(category: string): Observable<Feedback[]> {
        return this.feedbacks
            .getFeedbackList()
            .pipe(map((feedbacks: Feedback[]) => feedbacks.filter((feedback: Feedback) => feedback.category === category)));
    }
}
