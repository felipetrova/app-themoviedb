import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
// import { LancamentosComponent } from './views/lancamentos/lancamentos.component'
import { PopularesComponent } from './views/populares/populares.component'
import { AvaliadosComponent } from './views/avaliados/avaliados.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  // {
  //   path: "lancamentos",
  //   component: LancamentosComponent
  // },
  {
    path: "populares",
    component: PopularesComponent
  },
  {
    path: "avaliados",
    component: AvaliadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
