import { Injectable } from '@angular/core';
import data from '@core/mocks/data.json';
import { Feedback } from '@core/models/feedback.model';
import { User } from '@core/models/user.model';
import { BehaviorSubject, map, mergeMap, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class FeedbackService {
    constructor(private userService: UserService) {}

    createFeedback(feedback: Feedback) {
        const newFeedbackData = {
            id: data.productRequests.length + 1,
            title: feedback.title,
            category: feedback.category,
            upvotes: 0,
            status: 'suggestion',
            description: feedback.description,
            comments: [],
        };

        return new BehaviorSubject<boolean>(true).pipe(map(() => data.productRequests.push(newFeedbackData)));
    }

    updateFeedback(id: number, feedback: Feedback) {
        const index = data.productRequests.findIndex((x) => x.id === id);
        return new BehaviorSubject<boolean>(true).pipe(
            map(() => {
                data.productRequests[index].title = feedback.title;
                data.productRequests[index].category = feedback.category;
                data.productRequests[index].status = feedback.status;
                data.productRequests[index].description = feedback.description;
            })
        );
    }

    deleteFeedback(id: number) {
        const index = data.productRequests.findIndex((x) => x.id === id);
        return new BehaviorSubject<boolean>(true).pipe(map(() => data.productRequests.splice(index, 1)));
    }

    getFeedbackDetail(id: number): Observable<Feedback | undefined> {
        const feedback = data.productRequests.find((x) => x.id === id);
        return new BehaviorSubject<Feedback | undefined>(feedback).asObservable();
    }

    getFeedbackList(): Observable<Feedback[]> {
        return new BehaviorSubject<Feedback[]>(data.productRequests).asObservable();
    }

    createComment(feedbackId: number, comment: string) {
        const index = data.productRequests.findIndex((x) => x.id === feedbackId);

        return new BehaviorSubject<boolean>(true).pipe(
            mergeMap(() => this.userService.getAuthendicatedUser()),
            map((user: User) => {
                if (!data.productRequests[index].comments) {
                    data.productRequests[index].comments = [];
                }

                data.productRequests[index].comments?.push({
                    id: data.productRequests[index].comments!.length + 1,
                    content: comment,
                    user,
                });
            })
        );
    }
}
