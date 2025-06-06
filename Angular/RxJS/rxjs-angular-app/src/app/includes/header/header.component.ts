import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  exclusive: boolean = false;

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtility.exclusive.subscribe(res => {
      this.exclusive = res;
    })
  }

  ngOnDestroy(): void {

  }
}
