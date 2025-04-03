import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // userId = input.required<string>();

  userName = input.required<string>();

  message = input.required<string>() // static data reading from routes.ts

  // private usersService = inject(UsersService);

  // private activatedRoute = inject(ActivatedRoute);

  // private destroyRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.usersService.users.find(u => u.id === this.userId())?.name) // question mark is required as find may yield undefined if we don't find juser for that id

  //   ngOnInit(): void {
  //     console.log('Input Data: ' + this.message());

  //     console.log(this.activatedRoute);
  //     const subscription = this.activatedRoute.paramMap.subscribe({
  //       next: (paramMap) => {
  //         this.userName = this.usersService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
  //       }
  //     })

  //     this.destroyRef.onDestroy(() => subscription.unsubscribe())
  //   }
}

// resolver function for route-related dynamic data
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
}

// function for dynamically resolving title based on user
export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
}