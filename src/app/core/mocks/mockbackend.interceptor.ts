import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { endpoints } from '../http/endpoints';

@Injectable()
export class MockbackendInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.method === 'GET' && request.url === endpoints.feedbacks) {
            return of(new HttpResponse({ status: 200, body: '' }));
        }

        return next.handle(request);
    }
}
