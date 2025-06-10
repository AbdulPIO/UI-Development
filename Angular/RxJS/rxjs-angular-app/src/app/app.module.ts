import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiseComponent } from './includes/promise/promise.component';
import { ObservableComponent } from './includes/observable/observable.component';
import { ListComponent } from './includes/observable/list/list.component';
import { SubjectComponent } from './includes/observable/subject/subject.component';
import { ReplaySubjectComponent } from './includes/replay-subject/replay-subject.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { MergemapComponent } from './includes/observable/mergemap/mergemap.component';
import { MapComponent } from './includes/observable/map/map.component';
import { DebouncetimeComponent } from './includes/observable/debouncetime/debouncetime.component';
import { FilterComponent } from './includes/observable/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    MergemapComponent,
    MapComponent,
    DebouncetimeComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
