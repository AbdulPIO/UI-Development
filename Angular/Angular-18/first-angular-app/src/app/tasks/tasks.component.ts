import { Component, Input } from '@angular/core';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string;
  // or we can use
  // @Input() name: string | undefined;

  @Input({ required: true}) userId!: string;

  isAddingTask = false;

  // Dependency Injection
  constructor(private tasksService: TasksService) {}



  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
