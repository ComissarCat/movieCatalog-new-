import { Component } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { MovieGalleryComponent } from '../movie-gallery/movie-gallery.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SearchFormComponent, MovieGalleryComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
