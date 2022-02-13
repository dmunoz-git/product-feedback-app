import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private http: HttpClient) {}

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
