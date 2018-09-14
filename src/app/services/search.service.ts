import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, tap, catchError, filter, scan } from 'rxjs/operators';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL: string;
  private log(message: string) {
    console.log(`Message: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) { }

  searchItems(searchTerm: string): Observable<Items[]> {
  this.API_URL = 'http://api.walmartlabs.com/v1/search?query=${searchTerm}&format=json&apiKey=86uydk66yy93v2bmytuazcvw';
  if (!searchTerm.trim()) {
    return of([]);
  }
  return this.http.get<Items[]>(`${this.API_URL}`).pipe(
    tap(_ => this.log(`found items matching "${searchTerm}"`)),
    catchError(this.handleError<Items[]>('Error', []))
  );
  }
}
