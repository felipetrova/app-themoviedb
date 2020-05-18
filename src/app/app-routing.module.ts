import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { PopularesComponent } from './views/populares/populares.component'
import { AvaliadosComponent } from './views/avaliados/avaliados.component'
import { FilmeComponent } from './views/filme/filme.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "popular",
    component: PopularesComponent
  },
  {
    path: "top-rated",
    component: AvaliadosComponent
  },
  {
    path: "movie/:id",
    component: FilmeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
