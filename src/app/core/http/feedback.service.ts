import { Injectable } from '@angular/core';
import data from '@core/mocks/data.json';
import { Feedback } from '@core/models/feedback.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
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
}
