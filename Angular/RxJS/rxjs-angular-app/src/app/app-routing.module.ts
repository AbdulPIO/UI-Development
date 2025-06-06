import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { SubjectComponent } from './includes/observable/subject/subject.component';
import { ReplaySubjectComponent } from './includes/replay-subject/replay-subject.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observable', component: ObservableComponent, children: [
      { path: '', component: ListComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replaySubject', component: ReplaySubjectComponent }
    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
