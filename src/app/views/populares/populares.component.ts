import { Component, OnInit } from '@angular/core';

import { Filmes } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.scss']
})
export class PopularesComponent implements OnInit {

  populares: Filmes[]
  showLoading: boolean = true

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.filmesService.listPopulares().subscribe(populares => {
      this.populares = populares.results;
      this.showLoading = false;
    })
  }

}
