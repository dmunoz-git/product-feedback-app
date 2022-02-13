import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '@core/http/feedback.service';

@Component({
    selector: 'app-feedback-create',
    templateUrl: './feedback-create.component.html',
    styleUrls: ['./feedback-create.component.scss'],
})
export class FeedbackCreateComponent {
    public readonly categories = ['feature', 'bug', 'enhancement', 'ui', 'ux'];

    public feedbackForm = this.fb.group({
        title: ['', Validators.required],
        category: [this.categories[0], Validators.required],
        description: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private feedbacks: FeedbackService, private router: Router) {}

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
        this.feedbacks.createFeedback(this.feedbackForm.value).subscribe(() => this.router.navigate(['/']));
    }
}
