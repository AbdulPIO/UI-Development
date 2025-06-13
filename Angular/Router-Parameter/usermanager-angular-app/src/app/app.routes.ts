import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { authGuard } from './guards/auth.guard';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent, canActivate: [authGuard] },
    { path: 'user/create', component: UserCreateComponent, canActivate: [authGuard] },
    { path: 'user/:id', component: UserDetailsComponent, canActivate: [authGuard] },
    { path: 'user/:id/edit', component: UserEditComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];