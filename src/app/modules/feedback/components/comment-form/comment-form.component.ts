import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
    @Input() maxLength: number = 0; //Whitout limit
    @Input() sectionLabel: string = 'New comment';
    @Input() charCounterLabel: string = 'characters left';
    @Input() buttonLabel: string = 'Add comment';
    @Output() comment: EventEmitter<string> = new EventEmitter<string>();

    text: FormControl = new FormControl({ value: '', disabled: false });

    ngOnInit(): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.maxLength === 0 ? this.text.addValidators([Validators.minLength(1)]) : this.text.addValidators([Validators.maxLength(this.maxLength), Validators.minLength(1)]);
    }

    get textLength() {
        return this.text.value.length;
    }

    sendComment() {
        if (this.text.valid) {
            this.comment.emit(this.text.value);
            this.text.setValue('');
        }
    }
}
