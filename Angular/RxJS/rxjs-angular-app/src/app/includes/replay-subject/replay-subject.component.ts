import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(private designUtility: DesignUtilityService) { }

  // User data
  user1List = [
    'Angular 1',
    'Angular 2'
  ];
  user2List = [

  ];
  user3List = [
  ];

  //subscribe modes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  subscription2: Subscription;
  subscription3: Subscription;

  ngOnInit(): void {
    this.designUtility.videoEmit.subscribe(res => {
      this.user1List.push(res);
    })
  }

  onVideoAdd(video) {
    this.designUtility.videoEmit.next(video)
  }

  user2Subscibe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designUtility.videoEmit.subscribe(res => {
        this.user2List.push(res);
      })
    }

    this.subscribeMode2 = !this.subscribeMode2;
  }
  user3Subscibe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designUtility.videoEmit.subscribe(res => {
        this.user3List.push(res);
      })
    }

    this.subscribeMode3 = !this.subscribeMode3;
  }

}
