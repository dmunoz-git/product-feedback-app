import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    getFeedbackDetail(id: number): Observable<Feedback> {
        return this.http.get<Feedback>(`${endpoints.feedbacks}/${id}`);
    }

    getFeedbacks(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(endpoints.feedbacks);
    }

    updateFeedback(id: number, feedback: Feedback): Observable<void> {
        return this.http.put<void>(`${endpoints.feedbacks}/${id}`, feedback);
    }

    deleteFeedback(id: number): Observable<void> {
        return this.http.delete<void>(`${endpoints.feedbacks}/${id}`);
    }
}
