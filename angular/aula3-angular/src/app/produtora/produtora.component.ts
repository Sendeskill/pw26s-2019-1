import { Component, OnInit } from '@angular/core';
import { Produtora } from '../model/produtora';
import { Message, ConfirmationService } from 'primeng/api';
import { ProdutoraService } from './produtora.service';

@Component({
  selector: 'app-produtora',
  templateUrl: './produtora.component.html',
  styleUrls: ['./produtora.component.scss']
})
export class ProdutoraComponent implements OnInit {

  produtoras: Produtora[];
  produtoraEdit = new Produtora();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private produtoraService: ProdutoraService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.produtoraService.findAll().subscribe( e => this.produtoras = e);
  }

  newEntity() {
    this.produtoraEdit = new Produtora();
    this.showDialog = true;
  }

  cancel() {
    this.showDialog = false;
  }

  edit(produtora: Produtora) {
    this.produtoraEdit = Object.assign({}, produtora);
    this.showDialog = true;
  }

  save() {
    this.produtoraService.save(this.produtoraEdit).subscribe(e => {
      this.produtoraEdit = new Produtora();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity: 'success', summary: 'Confirmado',
      detail: 'Registro salvo com sucesso!'}];
    },
      error => {
      this.msgs = [{severity: 'error', summary: 'Erro',
            detail: 'Falha ao salvar o registro!'}];
    });
  }

  delete(produtora: Produtora) {
    this.confirmationService.confirm({
      message: 'Esta ação não poderá ser desfeita!',
      header: 'Deseja remover o registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.produtoraService.delete(produtora.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity: 'success', summary: 'Confirmado',
                    detail: 'Registro removido com sucesso!'}];
        }, error => {
          this.msgs = [{severity: 'error', summary: 'Erro',
                    detail: 'Falha ao remover o registro!'}];
        });
      }
    });
  }
}
