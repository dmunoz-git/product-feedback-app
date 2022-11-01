/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, Directive, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CommentComponent {}

@Directive({
    selector: '[comment-avatar]',
})
export class CommentAvatarDirective {
    @HostBinding('class') class = 'comment__avatar';
}

@Directive({
    selector: '[comment-name]',
    host: {
        class: 'comment__name',
    },
})
export class CommentNameDirective {}

@Directive({
    selector: '[comment-id]',
    host: {
        class: 'comment__id',
    },
})
export class CommentIdDirective {}

@Directive({
    selector: '[comment-text]',
    host: {
        class: 'comment__text',
    },
})
export class CommentTextDirective {}

@Directive({
    selector: '[comments-replies]',
    host: {
        class: 'comment__replies',
    },
})
export class CommentRepliesDirective {}
