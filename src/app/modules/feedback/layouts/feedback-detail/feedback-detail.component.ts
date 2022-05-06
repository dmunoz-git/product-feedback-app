import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '@core/http/feedback.service';
import { Feedback } from '@core/models/feedback.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-feedback-detail',
    templateUrl: './feedback-detail.component.html',
    styleUrls: ['./feedback-detail.component.scss'],
})
export class FeedbackDetailComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    id: number = 0;
    feedback!: Feedback;


    constructor(private readonly feedbackService: FeedbackService, private route: ActivatedRoute) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        this.subscription.add(
            this.feedbackService.getFeedbackDetail(this.id).subscribe((feedback) => {
                this.feedback = feedback as Feedback;
            })
        );
    }

    createComment(comment: string) {
        this.subscription.add(this.feedbackService.createComment(this.id, comment).subscribe(() => {}));
    }

}
