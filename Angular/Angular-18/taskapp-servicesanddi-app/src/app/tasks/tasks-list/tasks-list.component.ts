import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';
import { TasksService } from '../tasks.service';
// import { TasksService } from '../tasks.service';
// import { TASK_STATUS_OPTIONS, TaskStatusOptions } from '../task.model';
// import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taskStatusOptionsProvider]
})
export class TasksListComponent {
  // using custom Token DI
  // private tasksService = inject(TasksServiceToken);
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');

  //injecting 
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      // case 'all':
      //   return this.tasksService.allTasks();
      case 'open':
        return this.tasksService.allTasks().filter(task => task.status === 'OPEN')
      case 'in-progress':
        return this.tasksService.allTasks().filter(task => task.status === 'IN_PROGRESS')
      case 'done':
        return this.tasksService.allTasks().filter(task => task.status === 'DONE')
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
