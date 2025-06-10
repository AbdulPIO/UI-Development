import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  datArr = [
    { id: 1, name: 'Abdul', gender: 'male' },
    { id: 2, name: 'Priyanka', gender: 'female' },
    { id: 3, name: 'Ashish', gender: 'male' },
    { id: 4, name: 'Sonam', gender: 'female' },
    { id: 5, name: 'Janet', gender: 'Female' },
    { id: 6, name: 'Vaibhav', gender: 'male' },
    { id: 7, name: 'Hussain', gender: 'male' },
    { id: 8, name: 'Mujeeb', gender: 'male' },
    { id: 9, name: 'Sanjana', gender: 'female' },
    { id: 10, name: 'Rahul', gender: 'male' },
    { id: 11, name: 'Rachel', gender: 'female' },
    { id: 12, name: 'John', gender: 'male' }
  ]

  data;
  data2;
  data3;

  constructor() { }

  ngOnInit(): void {
    const source = from(this.datArr);

    // Ex-01
    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
      .subscribe(res => {
        console.log(res);
        this.data = res;
      })


    // Ex-02
    source.pipe(
      filter(member => member.gender == 'female'),
      toArray()
    )
      .subscribe(res => {
        console.log(res);
        this.data2 = res;
      })


    // Ex-03
    source.pipe(
      filter(member => member.id <= 6),
      toArray()
    )
      .subscribe(res => {
        console.log(res);
        this.data3 = res;
      })
  }
}
