import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from './genero';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

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

  findOne(id: number): Observable<Genero> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.get<Genero>(url);
  }

  save(genero: Genero): Observable<void> {
    const url = `${this.getUrl()}`;
    return this.http.post<void>(url, JSON.stringify(genero), httpOptions);
  }

  delete(id: number): Observable<void> {
    const url = `${this.getUrl()}/${id}`;
    return this.http.delete<void>(url);
  }

}
