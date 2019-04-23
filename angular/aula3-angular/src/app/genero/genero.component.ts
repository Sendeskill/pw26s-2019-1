import { Component, OnInit } from '@angular/core';
import { Genero } from '../model/genero';
import { GeneroService } from './genero.service';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  generos: Genero[];
  generoEdit = new Genero();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private generoService: GeneroService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.generoService.findAll().subscribe( e => this.generos = e);
  }

  newEntity() {
    this.generoEdit = new Genero();
    this.showDialog = true;
  }

  save() {
    this.generoService.save(this.generoEdit).subscribe( e => {
      this.generoEdit = new Genero();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity: 'success', summary: 'Confirmado',
                    detail: 'Registro salvo com sucesso!'}];
      },
      error => {
        this.msgs = [{severity: 'error', summary: 'Erro',
                    detail: 'Falha ao salvar o registro!'}];
      }
    );
  }

  cancel() {
    this.showDialog = false;
    this.generoEdit = new Genero();
  }

  edit(genero: Genero) {
    // this.generoEdit = genero;
    this.generoEdit = Object.assign({}, genero);
    this.showDialog = true;
  }

  delete(genero: Genero) {
    this.confirmationService.confirm({
      message: 'Esta ação não poderá ser desfeita!',
      header: 'Deseja remover o registro?',
      acceptLabel: 'Confirmar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.generoService.delete(genero.id).subscribe(() => {
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
