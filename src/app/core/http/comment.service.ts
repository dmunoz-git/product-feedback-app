import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor() {}

    createComment(comment: Comment): Observable<null> {
        return of(null);
    }

    getCommentDetail(id: number): Observable<null> {
        return of(null);
    }

    getComments(): Observable<null> {
        return of(null);
    }

    updateComment(id: number, comment: Comment): Observable<null> {
        return of(null);
    }

    deleteComment(id: number): Observable<null> {
        return of(null);
    }
}
