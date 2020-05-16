import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Lancamento } from './home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  api_key = '8ebb74292cb83e580502f2d28cff43a7'
  page = 1
  baseUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.api_key + '&language=en-US&page=' + this.page;

  constructor(
    private http: HttpClient
  ) { }

  listLancamento(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(this.baseUrl);
  }
}
