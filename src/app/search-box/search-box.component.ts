import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { SearchService } from '../services/search-service/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(private _searchService: SearchService) {}

  public cityName = "";

  searchCity() {
    this._searchService.searchCity(this.cityName);
  }

  ngOnInit() {
  }

}
