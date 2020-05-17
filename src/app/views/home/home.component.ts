import { Component, OnInit } from '@angular/core';

import { Filmes } from 'src/app/app.model';
import { FilmesService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lancamentos: Filmes[]
  showLoading: boolean = true

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.filmesService.listLancamento().subscribe(lancamentos => {
      console.log(lancamentos);
      this.lancamentos = lancamentos.results;
      this.showLoading = false;
    })
  }

}
