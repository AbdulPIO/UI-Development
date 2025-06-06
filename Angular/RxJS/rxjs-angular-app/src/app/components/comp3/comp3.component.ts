import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  username: string = 'Abdul';
  constructor(private designUtility: DesignUtilityService) {
    this.designUtility.username.subscribe(res => {
      this.username = res;
    })
  }

  onChange(uname) {
    this.designUtility.username.next(uname.value)
  }
}
