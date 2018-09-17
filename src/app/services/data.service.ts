import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/SearchModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private resultItem = new BehaviorSubject(undefined);
  currentItem = this.resultItem.asObservable();
  constructor() { }

  displayResult(message: Item) {
    this.resultItem.next(message);
  }
}
