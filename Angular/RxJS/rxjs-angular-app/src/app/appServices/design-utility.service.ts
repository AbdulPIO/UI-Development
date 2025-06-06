import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  username = new Subject<string>();
  // username = new BehaviorSubject<string>('Abdul');

  videoEmit = new ReplaySubject<string>(3);//previous item = 3

  constructor() { }
}
