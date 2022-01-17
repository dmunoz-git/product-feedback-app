import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../mocks/data.json';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAuthendicatedUser(): Observable<User> {
        return new BehaviorSubject<User>(data.currentUser).asObservable();
    }
}
