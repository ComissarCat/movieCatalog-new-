import { Component, Input } from '@angular/core';
import { SearchMovieService } from '../search-form/search-movie.service';
import { Subscription } from 'rxjs';
import { ResponseDetails } from '../../../definitions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  @Input() set id(imdbID: string) {
    this.searchMovieService.fetchDetails(imdbID, "short");
  }
  subscription: Subscription;
  response!: ResponseDetails | null;

  constructor(private searchMovieService: SearchMovieService) {
    this.subscription = this.searchMovieService.onDetailsSubscription().subscribe(data => {
      if (data) {
        this.response = data;
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
