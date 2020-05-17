import { Component, OnInit } from '@angular/core';

import { Filmes } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-avaliados',
  templateUrl: './avaliados.component.html',
  styleUrls: ['./avaliados.component.scss']
})
export class AvaliadosComponent implements OnInit {

  avaliados: Filmes[]
  showLoading: boolean = true

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.filmesService.listAvaliados().subscribe(avaliados => {
      this.avaliados = avaliados.results;
      this.showLoading = false;
    })
  }

}
