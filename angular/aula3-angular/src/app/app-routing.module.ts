import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { GeneroComponent } from './genero/genero.component';
import { ProdutoraComponent } from './produtora/produtora.component';
import { SerieComponent } from './serie/serie.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'genero', component: GeneroComponent},
  {path: 'produtora', component: ProdutoraComponent},
  {path: 'serie', component: SerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
