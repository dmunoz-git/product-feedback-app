import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentAvatarDirective, CommentComponent, CommentIdDirective, CommentNameDirective, CommentTextDirective } from './comment';

@NgModule({
    declarations: [CommentComponent, CommentIdDirective, CommentAvatarDirective, CommentNameDirective, CommentTextDirective],
    imports: [CommonModule],
    exports: [CommentComponent, CommentIdDirective, CommentAvatarDirective, CommentNameDirective, CommentTextDirective],
})
export class CommentModule {}
