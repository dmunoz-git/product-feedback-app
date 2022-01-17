import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from './endpoints';

@Injectable({
    providedIn: 'root',
})
export class CommentService {
    constructor(private http: HttpClient) {}

    createComment(comment: Comment): Observable<void> {
        return this.http.post<void>(endpoints.comments, comment);
    }

    getCommentDetail(id: number): Observable<Comment> {
        return this.http.get<Comment>(`${endpoints.comments}/${id}`);
    }

    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(endpoints.comments);
    }

    updateComment(id: number, comment: Comment): Observable<void> {
        return this.http.put<void>(`${endpoints.comments}/${id}`, comment);
    }

    deleteComment(id: number): Observable<void> {
        return this.http.delete<void>(`${endpoints.comments}/${id}`);
    }
}
