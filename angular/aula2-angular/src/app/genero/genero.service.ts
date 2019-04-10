import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from './genero';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient) { }

  private getUrl(): string {
    return environment.api + '/genero';
  }

  findAll(): Observable<Genero[]> {
    const url = `${this.getUrl()}`;
    return this.http.get<Genero[]>(url);
  }
}
