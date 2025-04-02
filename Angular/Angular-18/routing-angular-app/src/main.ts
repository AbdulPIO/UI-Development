import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   // providers: [provideRouter([
//   //   {
//   //     path: 'tasks', // <your-domain>/tasks
//   //     component: TasksComponent
//   //   }
//   // ])]

//   // providers: [
//   //   provideRouter(routes)
//   // ]
// })


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
