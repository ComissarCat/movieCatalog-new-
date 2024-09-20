import { Component, Input } from '@angular/core';
import { SearchMovieService } from '../../search-form/search-movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() pages: number = 0;
  currentPage: number = 1;
  subscription: Subscription;

  constructor(private searchMovieService: SearchMovieService) {
    this.subscription = this.searchMovieService.onPageNumberSubscription().subscribe(pageNumber => this.currentPage = pageNumber);
  }

  changePage(p: number) {
    this.searchMovieService.changePage(p);
    this.currentPage = p;
  }

  getPagesAsArray(): number[] {
    let temp = [];
    for (let i = 1; i <= this.pages; i++) {
      temp.push(i);
    }
    return temp;
  }
}
