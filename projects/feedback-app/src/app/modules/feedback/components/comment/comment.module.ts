import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    CommentAvatarDirective,
    CommentComponent,
    CommentIdDirective,
    CommentNameDirective,
    CommentRepliesDirective,
    CommentTextDirective,
} from './comment';

@NgModule({
    declarations: [
        CommentComponent,
        CommentIdDirective,
        CommentAvatarDirective,
        CommentNameDirective,
        CommentTextDirective,
        CommentRepliesDirective,
    ],
    imports: [CommonModule],
    exports: [
        CommentComponent,
        CommentIdDirective,
        CommentAvatarDirective,
        CommentNameDirective,
        CommentTextDirective,
        CommentRepliesDirective,
    ],
})
export class CommentModule {}
