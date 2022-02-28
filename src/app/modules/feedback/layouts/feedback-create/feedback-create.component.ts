import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '@core/http/feedback.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-feedback-create',
    templateUrl: './feedback-create.component.html',
    styleUrls: ['./feedback-create.component.scss'],
})
export class FeedbackCreateComponent implements OnInit, OnDestroy {
    public readonly categories = ['feature', 'bug', 'enhancement', 'ui', 'ux'];
    public update: boolean = false;

    public feedbackForm = this.fb.group({
        title: ['', Validators.required],
        category: [this.categories[0], Validators.required],
        description: ['', Validators.required],
    });

    private feedbackId: number = -1;
    private subscription: Subscription = new Subscription();

    constructor(private fb: FormBuilder, private feedbacks: FeedbackService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.feedbackId = Number(this.route.snapshot.paramMap.get('id'));
        if (this.feedbackId >= 0) {
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
                    this.feedbackForm.patchValue({
                        title: feedback.title,
                        category: feedback.category,
                        description: feedback.description,
                    });
                }
            })
        );
    }
}
