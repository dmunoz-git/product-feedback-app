import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../mocks/data.json';
import { Feedback } from '../models/feedback.model';
import { endpoints } from './endpoints';

@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
    constructor(private http: HttpClient) {}

    createFeedback(feedback: Feedback): Observable<void> {
        return this.http.post<void>(endpoints.feedbacks, feedback);
    }

    getFeedbackDetail(id: number): Observable<Feedback | undefined> {
        const feedback = data.productRequests.find((x) => x.id === id);
        return new BehaviorSubject<Feedback | undefined>(feedback).asObservable();
    }

    getFeedbackList(): Observable<Feedback[]> {
        return new BehaviorSubject<Feedback[]>(data.productRequests).asObservable();
    }

    updateFeedback(id: number, feedback: Feedback): Observable<void> {
        return this.http.put<void>(`${endpoints.feedbacks}/${id}`, feedback);
    }

    deleteFeedback(id: number): Observable<void> {
        return this.http.delete<void>(`${endpoints.feedbacks}/${id}`);
    }
}
