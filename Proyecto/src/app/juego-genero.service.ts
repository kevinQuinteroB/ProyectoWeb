import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JuegoGenero } from './juego-genero';

@Injectable({
  providedIn: 'root'
})
export class JuegoGeneroService {
  private Url = "http://localhost:8080/juegoGenero";
  constructor(private httpClient: HttpClient) { }
  findAll(id_juego: number): Observable<JuegoGenero[]> {
    return this.httpClient.get<JuegoGenero[]>(`${this.Url}/get/${id_juego}`);
  }
  findByGender(idGender: number): Observable<JuegoGenero[]> {
    return this.httpClient.get<JuegoGenero[]>(`${this.Url}/gender/${idGender}`).pipe(
      tap(juego_genero => {
        console.log('JuegosGeneros Cargados', juego_genero);
      })
    );
  }

}
