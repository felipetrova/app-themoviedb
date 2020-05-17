import { Component, OnInit } from '@angular/core';

import { Filme } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  movie: Filme
  showLoading: boolean = true

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idFilme = this.route.snapshot.paramMap.get('id')
    this.filmesService.getMovie(idFilme).subscribe(movie => {
      this.movie = movie;
      this.showLoading = false;
    })
  }

}
