import { Component } from '@angular/core';
import { SearchMovieService } from '../search-form/search-movie.service';
import { Subscription } from 'rxjs';
import { Response } from '../../../definitions';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-movie-gallery',
  standalone: true,
  imports: [MovieCardComponent, PaginationComponent],
  templateUrl: './movie-gallery.component.html',
  styleUrl: './movie-gallery.component.scss'
})
export class MovieGalleryComponent {
  subscription: Subscription;
  response!: Response | null;
  pages!: number;

  constructor(private searchMovieService: SearchMovieService) {
    this.subscription = this.searchMovieService.onResourceSubscription().subscribe(data => {
      if (data) {
        this.response = data;
        this.pages = Math.ceil(Number(data.totalResults) / 10);
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
