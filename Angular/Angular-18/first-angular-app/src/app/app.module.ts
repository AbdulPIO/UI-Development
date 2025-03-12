import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ],
    bootstrap: [AppComponent],
    // using imports as these are set as standalone:true and cannot be used in declarations[] array and also for importing other modules
    imports: [BrowserModule, SharedModule, FormsModule, TasksModule],
})
export class AppModule { }
