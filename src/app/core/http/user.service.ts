import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { endpoints } from './endpoints';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAuthendicatedUser(): Observable<User> {
        return this.http.get<User>(endpoints.users);
    }
}
