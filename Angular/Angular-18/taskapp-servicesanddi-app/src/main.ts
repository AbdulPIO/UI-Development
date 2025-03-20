import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';

// Custom Token
// export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
// bootstrapApplication(AppComponent, {
//   providers: [{ provide: TasksServiceToken, useClass: TasksService }]
// }).catch((err) => console.error(err));


// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
