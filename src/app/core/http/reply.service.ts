import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reply } from '../models/reply.model';

@Injectable({
    providedIn: 'root',
})
export class ReplyService {
    constructor() {}

    createReply(reply: Reply): Observable<null> {
        return of(null);
    }

    getReplyDetail(id: number): Observable<null> {
        return of(null);
    }

    getReplies(): Observable<null> {
        return of(null);
    }

    updateReply(id: number, reply: Reply): Observable<null> {
        return of(null);
    }

    deleteReply(id: number): Observable<null> {
        return of(null);
    }
}
