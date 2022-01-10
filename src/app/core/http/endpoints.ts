import { environment } from '@enviroments/environment';

export const endpoints = {
    users: `${environment.apiUrl}/users`,
    comments: `${environment.apiUrl}/comments`,
    feedbacks: `${environment.apiUrl}/feedbacks`,
    replies: `${environment.apiUrl}/replies`,
};
