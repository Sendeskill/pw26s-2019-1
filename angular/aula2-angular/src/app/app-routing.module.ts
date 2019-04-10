import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { GeneroListComponent } from './genero/genero-list/genero-list.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'genero', component: GeneroListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
