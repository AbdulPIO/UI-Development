import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { catchError, map, throwError } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);

  // error signal
  error = signal('');

  private placesService = inject(PlacesService);
  // alternative usng constructor
  // constructor(private httpClient: HttpClient) { }
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription =
      this.placesService.loadAvailablePlaces().subscribe({
        next: (places) => {
          this.places.set(places);

          // console.log(response.body?.places); // response object has a body property which actually contains reponse data but might be null so we use ? to use it conditionally only if it is not null

        },
        error: (error: Error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      }) //get returns an observable so we need to subscribe to it
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace)
      .subscribe({// we need to subscribe to a request to trigger it
        next: (resData) => console.log(resData)
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
