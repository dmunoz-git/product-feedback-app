import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-feedback-create',
    templateUrl: './feedback-create.component.html',
    styleUrls: ['./feedback-create.component.scss'],
})
export class FeedbackCreateComponent {
    feedbackForm = this.fb.group({
        title: [''],
        category: [''],
    });
    constructor(private fb: FormBuilder) {}
}
