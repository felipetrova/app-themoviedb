import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Filmes } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-avaliados',
  templateUrl: './avaliados.component.html',
  styleUrls: ['./avaliados.component.scss']
})
export class AvaliadosComponent implements OnInit {

  title = 'Top Rated Movies - The Movie Database (TMDb)';
  avaliados: Filmes[]
  showLoading: boolean = true

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.listAvaliados().subscribe(avaliados => {
      this.avaliados = avaliados.results;
      this.showLoading = false;

      // Add meta tags SEO
      this.titleService.setTitle(this.title);
      this.metaService.addTags([
        {name: 'keywords', content: 'Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'},
        {name: 'description', content: avaliados.overview},
        {name: 'robots', content: 'index, follow'}
      ]);
    })
  }

}
