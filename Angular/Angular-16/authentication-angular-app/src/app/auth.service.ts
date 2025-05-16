import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router) { }

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === 'admin') {
            const token = 'token-' + new Date().getTime();
            localStorage.setItem('authToken', token);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem('authToken');
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('authToken');
    }
}