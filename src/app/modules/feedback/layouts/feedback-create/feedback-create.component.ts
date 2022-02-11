import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-feedback-create',
    templateUrl: './feedback-create.component.html',
    styleUrls: ['./feedback-create.component.scss'],
})
export class FeedbackCreateComponent {
    public feedbackForm = this.fb.group({
        title: [''],
        category: ['feature'],
        detail: [''],
    });

    public readonly categories = ['feature', 'bug', 'enhancement', 'ui', 'ux'];
    constructor(private fb: FormBuilder) {}

    createFeedback() {}
}
