import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1: Subscription;
  sub2: Subscription;

  msg1;
  msg2;

  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const broadcastVideos = interval(1000);

    // Ex - 01
    this.sub1 = broadcastVideos.pipe(
      map(data => 'Video: ' + data)
    ).subscribe(res => {
      this.msg1 = res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex - 02
    this.sub2 = broadcastVideos.pipe(
      map(data => data * 10)
    )
      .subscribe(res => {
        // console.log(res);
        this.msg2 = res;
      })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    // Ex - 03

    const members = from([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
      { id: 4, name: 'D' },
      { id: 5, name: 'E' },
      { id: 6, name: 'F' },
      { id: 7, name: 'G' },
      { id: 8, name: 'H' }
    ])

    members.pipe(
      map(data => data.name)
    )
      .subscribe(res => {
        console.log(res);
        this.designUtility.print(res, 'elContainer')
      })
  }
}
