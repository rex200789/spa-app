import { Component, OnInit } from '@angular/core';
import { SearchModel, Item } from '../../models/SearchModel';
import { SearchService } from 'src/app/services/search.service';
import { DataService } from 'src/app/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private showHeader: boolean;
  private searchTerm: string;
  closeResult: string;
  SearchModel: SearchModel;
  item: Item[] = [];
  itemToShow: Item[];
  constructor(private Searchservice: SearchService, private data: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.showHeader = false;
    this.data.currentItem.subscribe(itemToShow => this.itemToShow = itemToShow);
  }
  searchItems(searchTerm) {
    this.item = null;
    this.Searchservice.searchItems(searchTerm).subscribe(mainItem => {
      this.SearchModel = mainItem;
      this.item = mainItem.items;
      this.SearchModel.items = this.item;
      if (this.SearchModel.items.length > 0) {
        this.showHeader = true;
      }
    });
  }
  newResults(itemToShow) {
    this.data.displayResult(itemToShow);
    this.modalService.open('', {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
    /*
    this.modalService.open(itemToShow, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
    */
  }
}
