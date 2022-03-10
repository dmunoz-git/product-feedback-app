import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent {
    @Input() maxLength: number = 0; //Whitout limit
    @Input() sectionLabel: string = 'New comment';
    @Input() charCounterLabel: string = 'characters left';
    @Input() buttonLabel: string = 'Add comment';
    @Output() comment: EventEmitter<string> = new EventEmitter<string>();

    text: FormControl = new FormControl('', Validators.maxLength(this.maxLength));

    sendComment() {
        if (this.text.valid) {
            this.text.setValue('');
            this.comment.emit(this.text.value);
        }
    }
}
