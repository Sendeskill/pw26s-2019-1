import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie';
import { SerieService } from './serie.service';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  series: Serie[];
  serieEdit = new Serie();
  showDialog = false;
  msgs: Message[] = [];

  constructor(private serieService: SerieService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.serieService.findAll().subscribe(e => this.series = e);
  }

}
