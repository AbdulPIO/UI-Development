import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { catchError, map, tap, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces('http://localhost:3000/places', 'Something went wrong fething the available places. Please try again later.')
  }

  loadUserPlaces() {
    return this.fetchPlaces('http://localhost:3000/user-places', 'Something went wrong fething your favourite places. Please try again later.')
      .pipe(tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })); // execute code like subscribe but without subscribing
  }

  addPlaceToUserPlaces(place: Place) {
    this.userPlaces.update(prevPlaces => [...prevPlaces, place]);
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id
    })
  }

  removeUserPlace(place: Place) { }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url)
      // const subscription = this.httpClient.get<{ places: Place[] }>('http://localhost:3000/places', {
      //   observe: 'response' // so that next function is triggered with different data than the response data
      //   //besides response we can also observe 'events' - now the next event will get triggered multiple times instead once as it will get triggered for different events that occured during that request
      // })
      .pipe(
        map((resData) => resData.places)// converting places object that has places key that contains the array to just the array
        , catchError((error) => {
          console.log(error);
          return throwError(() => new Error(errorMessage))
        }))
  }
}
