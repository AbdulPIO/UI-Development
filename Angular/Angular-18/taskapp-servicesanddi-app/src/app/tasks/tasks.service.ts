import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
    providedIn: 'root' // means that this service is set up such that it can be injected into any component, service, or directive anywhere in our angular app
})
export class TasksService {
    private tasks = signal<Task[]>([]);
    private logginService = inject(LoggingService);

    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string; description: string }) {

        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        }
        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
        this.logginService.log('ADDED TASK with title ' + taskData.title);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? { ...task, status: newStatus } : task))
        this.logginService.log('CHANGE TASK STATUS TO ' + newStatus);

    };
}