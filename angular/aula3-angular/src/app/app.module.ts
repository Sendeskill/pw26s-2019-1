import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { GeneroComponent } from './genero/genero.component';

import { GeneroService } from './genero/genero.service';
import { HttpClientModule } from '@angular/common/http';

// Imports PrimeNG
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {GrowlModule} from 'primeng/growl';
import {DialogModule} from 'primeng/dialog';
import {ConfirmationService} from 'primeng/api';
import { ProdutoraComponent } from './produtora/produtora.component';
import { ProdutoraService } from './produtora/produtora.service';
import { SerieComponent } from './serie/serie.component';
import { SerieService } from './serie/serie.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    GeneroComponent,
    ProdutoraComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    TableModule,
    ConfirmDialogModule,
    GrowlModule,
    DialogModule,
    FontAwesomeModule
  ],
  providers: [
    GeneroService,
    ConfirmationService,
    ProdutoraService,
    SerieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
