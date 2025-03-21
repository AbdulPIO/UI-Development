import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

// importing rxjs function
import { interval, map, Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // creating a signal
  clickCount = signal(0);

  // alternate method to convert signal to observable
  clickCount$ = toObservable(this.clickCount);

  interval$ = interval(1000); // assigning observable interval function to a property
  // converting observable to signal
  intervalSignal = toSignal(this.interval$, { initialValue: 0 }); // signal based on the interval observable

  // creating a custom observable
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if (timesExecuted > 5) {
        clearInterval(interval);
        subscriber.complete(); // emit an event that will automatically clean up the subscription
        return;
      }
      console.log('Emitting New value...');
      subscriber.next({ message: 'New Value' });
      timesExecuted++;
    }, 2000)
  });

  // setting up an effect
  constructor() {
    // effect(() => { // pass a function which will automatically be executed by Angular when any signal we use here updates
    //   console.log(`Clicked button ${this.clickCount()} times.`);
    // })

    // converting clickCount to an observable
    // toObservable(this.clickCount); 
  }

  // to clear subscription
  private destroyRef = inject(DestroyRef);

  // using the interval function provided by RxJS
  ngOnInit(): void {

    // calling custom observable
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED!')

    })

    const subscription = interval(1000).pipe( // adding pipe to add operators to transform stream of data
      map((val) => val * 2)
    ).subscribe({   // automatically produce sequential number values every specified interval of time
      next: (val) => console.log(val), // triggered when a next new value is emitted
      complete: () => { } // called if this observale will not emit any more numbers
      // we can also add an error function in case we are sending an HTTP request and then providig the response of that request
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe(); // cleaning up the subscription
    })

    const anotherSubscription = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times.`)
    });
    this.destroyRef.onDestroy(() => {
      anotherSubscription.unsubscribe();
    })
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1)
  }
}
