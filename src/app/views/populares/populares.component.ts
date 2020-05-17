import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Filmes } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.scss']
})
export class PopularesComponent implements OnInit {

  title = 'Popular - The Movie Database (TMDb)';
  populares: Filmes[]
  showLoading: boolean = true

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmesService.listPopulares().subscribe(populares => {
      this.populares = populares.results;
      this.showLoading = false;

      // Add meta tags SEO
      this.titleService.setTitle(this.title);
      this.metaService.addTags([
        {name: 'keywords', content: 'Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'},
        {name: 'description', content: populares.overview},
        {name: 'robots', content: 'index, follow'}
      ]);
    })
  }

}
