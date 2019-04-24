import { Injectable } from '@angular/core';
import { Produtora } from '../model/produtora';
import { CrudService } from '../generic/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoraService extends CrudService<Produtora, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/produtora', http);
  }

}
