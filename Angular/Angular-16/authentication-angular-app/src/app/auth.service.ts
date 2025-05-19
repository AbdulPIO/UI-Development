import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly TOKEN_KEY = 'authToken';

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === 'admin') {
            const expiry = Date.now() + 5 * 60 * 1000; // 5mins
            const token = btoa('admin:authenticated:${expiry}');
            localStorage.setItem(this.TOKEN_KEY, token);
            return true;
        }
        return false;
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.TOKEN_KEY);
        if (!token) return false;

        try {
            const [user, status, expiry] = atob(token).split(':');
            if (user !== 'admin' || status !== 'authenticated') return false;

            if (Date.now() > +expiry) {
                this.logout();
                return false;
            }
            return true;
        } catch {
            this.logout();
            return false;
        }
    }
}