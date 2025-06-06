import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username: string = 'Abdul';

  constructor(private designUtility: DesignUtilityService) {
    this.designUtility.username.subscribe(res => {
      this.username = res;
    })
  }

  ngOnInit(): void {
    this.designUtility.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.designUtility.exclusive.next(false);
  }
}
