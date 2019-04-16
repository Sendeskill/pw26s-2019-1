import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { GeneroListComponent } from './genero/genero-list/genero-list.component';
import { GeneroFormComponent } from './genero/genero-form/genero-form.component';
import { GeneroService } from './genero/genero.service';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    GeneroListComponent,
    GeneroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
