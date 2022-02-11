import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-feedback-create',
    templateUrl: './feedback-create.component.html',
    styleUrls: ['./feedback-create.component.scss'],
})
export class FeedbackCreateComponent {
    public feedbackForm = this.fb.group({
        title: ['', Validators.required],
        category: ['ux', Validators.required],
        detail: ['', Validators.required],
    });

    public readonly categories = ['feature', 'bug', 'enhancement', 'ui', 'ux'];

    constructor(private fb: FormBuilder) {}

    get title(): AbstractControl | null {
        return this.feedbackForm.get('title');
    }

    get category(): AbstractControl | null {
        return this.feedbackForm.get('category');
    }

    get detail(): AbstractControl | null {
        return this.feedbackForm.get('detail');
    }

    createFeedback() {}
}
