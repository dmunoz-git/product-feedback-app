import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    createComment(): Observable<null> {
        return of(null);
    }

    getCommentDetail(): Observable<null> {
        return of(null);
    }

    getComments(): Observable<null> {
        return of(null);
    }

    updateComment(): Observable<null> {
        return of(null);
    }

    deleteComment(): Observable<null> {
        return of(null);
    }
}
