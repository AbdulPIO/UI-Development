import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.scss']
})
export class DebouncetimeComponent implements OnInit, AfterViewInit {

  requestedData = null;
  requestedData2 = null;
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    // Ex - 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    )

    searchTerm.subscribe(res => {
      console.log(res);
      this.requestedData = res;

      setTimeout(() => {
        this.requestedData = null
      }, 2000);
    })

    // Ex - 02
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    searchTerm2.subscribe(res => {
      console.log(res);
      this.requestedData2 = res;

      setTimeout(() => {
        this.requestedData2 = null
      }, 2000);
    })
  }
}
