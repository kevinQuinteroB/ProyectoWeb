import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private base_url = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(`${this.base_url}/gender/all`).pipe(
      tap(nameGenero => {
        console.log('Juego Cargado', nameGenero);
      })
    );

  }
}
