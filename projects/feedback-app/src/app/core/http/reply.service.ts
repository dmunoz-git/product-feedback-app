import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReplyService {
    createReply(): Observable<null> {
        return of(null);
    }

    getReplyDetail(): Observable<null> {
        return of(null);
    }

    getReplies(): Observable<null> {
        return of(null);
    }

    updateReply(): Observable<null> {
        return of(null);
    }

    deleteReply(): Observable<null> {
        return of(null);
    }
}
