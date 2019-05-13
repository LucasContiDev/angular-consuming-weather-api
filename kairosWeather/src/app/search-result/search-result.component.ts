import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search-service/search.service';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private _data: SearchService) { }

  ngOnInit() {
    
  }

}
