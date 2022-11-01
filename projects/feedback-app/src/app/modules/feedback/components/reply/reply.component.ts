import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-reply',
    templateUrl: './reply.component.html',
    styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
    @Input() postBtnLabel: string = 'Post';
    @Input() placeholder: string = '';
    @Input() maxLength: number = 0; //Without Limit
    @Output() post: EventEmitter<string> = new EventEmitter<string>();

    text: FormControl = new FormControl({ value: '', disabled: false });

    ngOnInit(): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.maxLength === 0
            ? this.text.addValidators([Validators.minLength(1)])
            : this.text.addValidators([Validators.maxLength(this.maxLength), Validators.minLength(1)]);
    }

    postReply() {
        if (this.text.valid) {
            this.post.emit(this.text.value);
        }
    }
}
