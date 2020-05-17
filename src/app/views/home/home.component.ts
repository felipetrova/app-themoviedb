import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Filmes } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Upcoming - The Movie Database (TMDb)';
  lancamentos: Filmes[]
  showLoading: boolean = true

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.listLancamento().subscribe(lancamentos => {
      this.lancamentos = lancamentos.results;
      this.showLoading = false;

      // Add meta tags SEO
      this.titleService.setTitle(this.title);
      this.metaService.addTags([
        {name: 'keywords', content: 'Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'},
        {name: 'description', content: lancamentos.overview},
        {name: 'robots', content: 'index, follow'}
      ]);
    })
  }

}
