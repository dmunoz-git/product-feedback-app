import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import data from '../mocks/data.json';
import { Feedback } from '../models/feedback.model';

@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
    constructor() {}

    createFeedback(feedback: Feedback) {
        const newFeedbackData = {
            id: data.productRequests.length + 1,
            title: feedback.title,
            category: feedback.category,
            upvotes: 0,
            status: feedback.status,
            description: feedback.description,
            comments: [],
        };

        return new BehaviorSubject<boolean>(true).pipe(map(() => data.productRequests.push(newFeedbackData)));
    }

    getFeedbackDetail(id: number): Observable<Feedback | undefined> {
        const feedback = data.productRequests.find((x) => x.id === id);
        return new BehaviorSubject<Feedback | undefined>(feedback).asObservable();
    }

    getFeedbackList(): Observable<Feedback[]> {
        return new BehaviorSubject<Feedback[]>(data.productRequests).asObservable();
    }

    updateFeedback(id: number, feedback: Feedback): Observable<null> {
        return of(null);
    }

    deleteFeedback(id: number): Observable<null> {
        return of(null);
    }
}
