import { Component } from '@angular/core';
import { SearchMovieService } from './search-movie.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  searchText: string = "";
  typeSelect: string = "";

  constructor(private searchMovieService: SearchMovieService) { }

  action() {
    this.searchMovieService.searchTitle(this.searchText, this.typeSelect);
  }
}
