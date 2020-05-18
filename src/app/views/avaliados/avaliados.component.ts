import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { ListMovies } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-avaliados',
  templateUrl: './avaliados.component.html',
  styleUrls: ['./avaliados.component.scss']
})
export class AvaliadosComponent implements OnInit {

  title = 'Top Rated Movies - The Movie Database (TMDb)';
  results: ListMovies[]
  showLoading: boolean = true

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.listAvaliados().subscribe(results => {
      this.results = results['results'];
      this.showLoading = false;

      // Add meta tags SEO
      this.titleService.setTitle(this.title);
      this.metaService.addTags([
        {name: 'keywords', content: 'Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'},
        {name: 'description', content: this.results['overview']},
        {name: 'robots', content: 'index, follow'}
      ]);
    })
  }

}
