import { Component } from '@angular/core';
import { SearchService } from './../../services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([]);
  constructor(private searchService: SearchService) {}

  receiveData(event: string): void {
    console.log('Holi desde History');
    this.listResults$ = this.searchService.searchTracks$(event);
  }
}
