import { Component, OnDestroy, OnInit } from '@angular/core';
import { USerService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private acivatedSub: Subscription;

  constructor(private userService: USerService) { }

  ngOnInit() {
    this.acivatedSub = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  ngOnDestroy(): void {
    this.acivatedSub.unsubscribe();
  }
}
