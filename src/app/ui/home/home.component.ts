import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/items';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private searchTerm: string;

  constructor(private Searchservice: SearchService) { }

  ngOnInit() {
    this.searchTerm = 'chips';
    this.Searchservice.searchItems(this.searchTerm).subscribe(val => console.log(val));
  }
}
