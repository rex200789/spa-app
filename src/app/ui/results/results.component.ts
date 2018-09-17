import { Component, OnInit } from '@angular/core';
import { SearchModel, Item } from '../../models/SearchModel';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  itemToShow: Item[];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentItem.subscribe(itemToShow => this.itemToShow = itemToShow);
    console.log('Results are: ' + this.itemToShow);
  }
}
