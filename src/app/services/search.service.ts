import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jsonp } from '@angular/http';
import { SearchModel, Item } from '../models/SearchModel';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL: string;
  private result: string;
  data: string;
  times: number;
  private log(message: string) {
    console.log(`Message: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient, private jsonp: Jsonp) { }

  getRecommendedItems(itemId: string) {
    this.API_URL = 'https://localhost:5001/api/values/' + itemId;
    return this.http.get(this.API_URL);
  }
  searchItems(searchTerm: string): Observable<SearchModel> {
    this.API_URL = 'http://api.walmartlabs.com/v1/search?query=' + searchTerm + '&format=json&apiKey=86uydk66yy93v2bmytuazcvw&callback=JSONP_CALLBACK';
    return this.jsonp.request(this.API_URL, { method: 'Get' }).pipe(map(this.extractData));
  }

  extractData(any: any) {
    const body = any.json();
    console.log('Body', body);
    return body;
  }
}
