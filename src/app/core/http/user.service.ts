import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../mocks/data.json';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    getAuthendicatedUser(): Observable<User> {
        return new BehaviorSubject<User>(data.currentUser).asObservable();
    }
}
