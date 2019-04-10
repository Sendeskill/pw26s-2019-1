import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../genero.service';
import { Genero } from '../genero';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.scss']
})
export class GeneroListComponent implements OnInit {

  generos: Genero[];

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.generoService.findAll().subscribe( e => this.generos = e);
  }
}
