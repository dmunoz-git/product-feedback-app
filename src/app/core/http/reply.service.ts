import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reply } from '../models/reply.model';
import { endpoints } from './endpoints';

@Injectable({
    providedIn: 'root',
})
export class ReplyService {
    constructor(private http: HttpClient) {}

    createReply(reply: Reply): Observable<void> {
        return this.http.post<void>(endpoints.replies, reply);
    }

    getReplyDetail(id: number): Observable<Reply> {
        return this.http.get<Reply>(`${endpoints.replies}/${id}`);
    }

    getReplies(): Observable<Reply[]> {
        return this.http.get<Reply[]>(endpoints.replies);
    }

    updateReply(id: number, reply: Reply): Observable<void> {
        return this.http.put<void>(`${endpoints.replies}/${id}`, reply);
    }

    deleteReply(id: number): Observable<void> {
        return this.http.delete<void>(`${endpoints.replies}/${id}`);
    }
}
