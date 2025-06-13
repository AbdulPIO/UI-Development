import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = 'http://localhost:3000/users';
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.url}/${id}`);
    }

    createUser(u: User): Observable<User> {
        return this.http.post<User>(this.url, u);
    }

    updateUser(u: User): Observable<User> {
        return this.http.put<User>(`${this.url}/${u.id}`, u);
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}