import { Component, OnInit } from '@angular/core';

import { Lancamento } from './home.model';
import { LancamentoService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lancamentos: Lancamento[]

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.lancamentoService.listLancamento().subscribe(lancamentos => {
      console.log(lancamentos);
      this.lancamentos = lancamentos.results;
    })
  }

}
