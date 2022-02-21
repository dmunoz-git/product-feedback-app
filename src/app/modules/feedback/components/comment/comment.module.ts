import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentAvatarDirective, CommentComponent, CommentIdDirective, CommentNameDirective } from './comment';

@NgModule({
    declarations: [CommentComponent, CommentIdDirective, CommentAvatarDirective, CommentNameDirective],
    imports: [CommonModule],
    exports: [CommentComponent, CommentIdDirective, CommentAvatarDirective, CommentNameDirective],
})
export class CommentModule {}
