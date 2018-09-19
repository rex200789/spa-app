import { Component, OnInit } from '@angular/core';
import { SearchModel, Item } from '../../models/SearchModel';
import { SearchService } from 'src/app/services/search.service';
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
  RecommendedModel: SearchModel;
  item: Item[] = [];
  recommendeditems: Item[] = [];
  noitems: boolean;
  itemToShow: Item[];
  constructor(private Searchservice: SearchService, private modalService: NgbModal) { }

  ngOnInit() {
    this.showHeader = false;
  }
  searchItems(searchTerm) {
    this.noitems = false;
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
  newResults(itemToShow, content) {
    this.itemToShow = itemToShow;
    this.Searchservice.getRecommendedItems(itemToShow.itemId).subscribe((data: Item[]) => {
      try {
        this.recommendeditems = data.slice(0, 10);
      }
      catch (Error) {
        this.noitems = true;
      }
    });

    this.modalService.open(content, { size: 'lg', windowClass: 'modal-bigger', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
}
