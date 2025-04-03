import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.routes';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { resolveTitle, resolveUserName, UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { inject } from '@angular/core';

const dummyCanMAtch: CanMatchFn = (route, segments) => {
    const router = inject(Router)
    const shouldGetAccess = Math.random();
    if (shouldGetAccess < 1) {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const routes: Routes = [
    {
        path: '', // <your-path>/
        component: NoTaskComponent,
        title: 'No Task Selected'
    },
    // {
    //     path: 'tasks', // <your-domain>/tasks
    //     component: TasksComponent
    // }
    {
        path: 'users/:userId', // dynamic path segment <your-domain>/users/<uid>
        component: UserTasksComponent,
        children: userRoutes,
        canMatch: [dummyCanMAtch], // route guard that controls whether this entire route should be matched by a certain navigation action or not
        data: {
            message: 'Hello!'
        },
        resolve: {
            userName: resolveUserName // value returned to UserTasksComponent as userName
        },
        title: resolveTitle
        // [
        // exported child routes to users.routes.ts
        // {
        //     path: '',
        //     redirectTo: 'tasks',
        //     pathMatch: 'prefix'
        // },
        // {
        //     path: 'tasks', // <your-domain>/users/<uid>/tasks
        //     component: TasksComponent
        // },
        // {
        //     path: 'tasks/new',
        //     component: NewTaskComponent
        // }
        // ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
