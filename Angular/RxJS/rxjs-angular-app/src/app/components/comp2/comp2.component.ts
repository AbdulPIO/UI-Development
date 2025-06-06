import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
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
