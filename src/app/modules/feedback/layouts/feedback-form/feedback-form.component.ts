import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '@core/http/feedback.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit, OnDestroy {
    public readonly categories = ['feature', 'bug', 'enhancement', 'ui', 'ux'];
    public readonly statuses = ['planned', 'inProgress', 'live', 'suggestion', 'closed'];
    public update: boolean = false;
    public statusControl = this.fb.control('', [Validators.required]);

    public feedbackForm = this.fb.group({
        title: ['', Validators.required],
        category: [this.categories[0], Validators.required],
        description: ['', Validators.required],
    });

    private feedbackId: number = -1;
    private subscription: Subscription = new Subscription();

    constructor(private fb: FormBuilder, private feedbacks: FeedbackService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        if (this.route.snapshot.paramMap.get('id')) {
            this.feedbackId = Number(this.route.snapshot.paramMap.get('id'));

            this.getFeedback(this.feedbackId);
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get title(): AbstractControl | null {
        return this.feedbackForm.get('title');
    }

    get category(): AbstractControl | null {
        return this.feedbackForm.get('category');
    }

    get description(): AbstractControl | null {
        return this.feedbackForm.get('description');
    }

    createFeedback() {
        this.subscription.add(this.feedbacks.createFeedback(this.feedbackForm.value).subscribe(() => this.router.navigate(['/'])));
    }

    getFeedback(feedbackId: number) {
        this.subscription.add(
            this.feedbacks.getFeedbackDetail(feedbackId).subscribe((feedback) => {
                if (feedback) {
                    this.update = true;
                    this.feedbackForm.patchValue({
                        title: feedback.title,
                        category: feedback.category,
                        description: feedback.description,
                    });

                    this.statusControl.setValue(feedback.status);
                } else {
                    this.router.navigate(['/']);
                }
            })
        );
    }

    updateFeedback() {
        const feedback = this.feedbackForm.value;
        feedback.status = this.statusControl.value;
        this.subscription.add(this.feedbacks.updateFeedback(this.feedbackId, feedback).subscribe(() => this.router.navigate(['/'])));
    }

    deleteFeedback() {
        this.subscription.add(this.feedbacks.deleteFeedback(this.feedbackId).subscribe(() => this.router.navigate(['/'])));
    }
}
