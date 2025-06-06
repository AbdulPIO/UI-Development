import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

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
