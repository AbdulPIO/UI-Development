import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
    const router = inject(Router);
    const isLoggedIn = true;
    if (!isLoggedIn) {
        alert('Access Denied');
        router.navigate(['/']);
        return false;
    }
    return true;
}