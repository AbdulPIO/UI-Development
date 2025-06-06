import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  constructor() { }

  DellAvailable() {
    return true
  }

  HpAvailable() {
    return false
  }

  promiseVal;

  ngOnInit(): void {
    // let buyLaptop = new Promise(function (resolve, reject) {
    //   resolve('Promise is resolved');
    // });
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is rejected');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is Purchased')
        }, 3000)
      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          resolve('Hp is Purchased')
        }, 3000)
      } else {
        return setTimeout(() => {
          reject('Laptop is not available in store.')
        })
      }
    });

    buyLaptop.then(res => { // .then is when promise is resolved
      console.log('.then code :', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('.catch code :', res);
      this.promiseVal = res;
    })
  }

}
