import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, observable } from 'rxjs';
import { map, tap, catchError, filter, scan } from 'rxjs/operators';
import { Jsonp, Response} from '@angular/http';
import { SearchModel } from '../models/SearchModel';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL: string;
  private result: string;
  data: string;
  private log(message: string) {
    console.log(`Message: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient, private jsonp: Jsonp) { }

  /*
  searchItems(searchTerm: string) {
    this.API_URL = 'http://api.walmartlabs.com/v1/search?query='+ searchTerm +'&format=json&apiKey=86uydk66yy93v2bmytuazcvw&callback=JSONP_CALLBACK';
    return this.jsonp.request(this.API_URL, { method: 'Get' });
  }
  */

  searchItems(searchTerm: string): Observable<SearchModel> {
    this.API_URL = 'http://api.walmartlabs.com/v1/search?query='+ searchTerm +'&format=json&apiKey=86uydk66yy93v2bmytuazcvw&callback=JSONP_CALLBACK';
    return this.jsonp.request(this.API_URL, { method: 'Get' }).pipe(map(this.extractData));
  }

  extractData( any: any) {
    const body = any.json();
    console.log('Body', body);
    return body;
  }
}
