import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
        path: "",
        component: MainPageComponent
    },
    {
        path: "movie/:id",
        component: MovieDetailsComponent
    }
];
