import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response, ResponseDetails } from '../../../definitions';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  public resourseSource = new BehaviorSubject<Response | null>(null);
  public pageSource = new BehaviorSubject<number>(0);
  public detailsSourse = new BehaviorSubject<ResponseDetails | null>(null);
  s!: string;
  type!: string;
  pageNumber: number = 1;

  constructor() { }

  async searchTitle(s: string, type: string) {
    this.s = s;
    this.type = type;
    this.pageNumber = 1;
    let data = await this.fetchMovies();
    if (data.Response == "True") {
      this.resourseSource.next(data);
      this.pageSource.next(this.pageNumber);
    }
  }

  async changePage(nextPage: number) {
    this.pageNumber = nextPage;
    this.resourseSource.next(await this.fetchMovies());
    this.pageSource.next(this.pageNumber);
  }

  async fetchMovies(): Promise<Response> {
    const response = await fetch('http://www.omdbapi.com/?apikey=' + environment.apiKey + '&s=' + this.s + '&type=' + this.type + '&page=' + this.pageNumber);
    return await response.json();
  }

  async fetchPlot(id: string, plot: string) {
    const response = await fetch('http://www.omdbapi.com/?apikey=' + environment.apiKey + '&id=' + id + '&plot=' + plot)
    this.detailsSourse.next(await response.json());
  }

  onResourceSubscription(): Observable<Response | null> {
    return this.resourseSource.asObservable();
  }

  onPageNumberSubscription(): Observable<number> {
    return this.pageSource.asObservable();
  }

  onDetailsSubscription(): Observable<ResponseDetails | null> {
    return this.detailsSourse.asObservable();
  }
}
