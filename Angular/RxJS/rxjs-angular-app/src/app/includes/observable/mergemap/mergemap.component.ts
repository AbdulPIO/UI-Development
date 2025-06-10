import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  getData(data) {
    return of(data + ' Video Uploaded')
  }
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit() {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01
    source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res => res.subscribe(res2 => {
        console.log(res2);
        this.designUtility.print(res2, 'elContainer')
      }))

    // Ex - 02
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
      .subscribe(res => {
        console.log(res);
        this.designUtility.print(res, 'elContainer2')
      })


    // Ex - 03
    source.pipe(
      mergeMap(res => this.getData(res)),
    )
      .subscribe(res => {
        console.log(res);
        this.designUtility.print(res, 'elContainer3')
      })
  }
}
