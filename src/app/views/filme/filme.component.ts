import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { Movie } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  title = '';
  movie: Movie
  showLoading: boolean = true

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idFilme = this.route.snapshot.paramMap.get('id')
    this.filmesService.getMovie(idFilme).subscribe(movie => {
      this.movie = movie;
      this.showLoading = false;

      // Add meta tags SEO
      this.titleService.setTitle(movie.title + ' - The Movie Database (TMDb)');
      this.metaService.addTags([
        {name: 'keywords', content: 'Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast'},
        {name: 'description', content: movie.overview},
        {name: 'robots', content: 'index, follow'}
      ]);
    })

  }

}
