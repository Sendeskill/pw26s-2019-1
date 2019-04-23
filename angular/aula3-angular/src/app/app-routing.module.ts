import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { GeneroComponent } from './genero/genero.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'genero', component: GeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
