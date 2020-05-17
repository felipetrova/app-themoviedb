import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Filmes } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  baseUrl = 'https://api.themoviedb.org/3/movie/';
  api_key = '8ebb74292cb83e580502f2d28cff43a7'
  page = 1

  constructor(
    private http: HttpClient
  ) { }

  listLancamento(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(this.baseUrl + 'upcoming?api_key=' + this.api_key + '&language=en-US&page=' + this.page);
  }

  listPopulares(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(this.baseUrl + 'popular?api_key=' + this.api_key + '&language=en-US&page=' + this.page);
  }

  listAvaliados(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(this.baseUrl + 'top_rated?api_key=' + this.api_key + '&language=en-US&page=' + this.page);
  }
}
