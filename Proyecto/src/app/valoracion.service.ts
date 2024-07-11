import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Valoracion } from './valoracion';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {
  private Url = "http://localhost:8080/valoracion";

  constructor(private httpClient: HttpClient) { }

  findAll(id_juego: number): Observable<Valoracion[]> {
    return this.httpClient.get<Valoracion[]>(`${this.Url}/${id_juego}`);
  }

  postValoracion(id_juego: number, valoracion: Valoracion): Observable<Valoracion> {
    return this.httpClient.post<Valoracion>(`${this.Url}/crear/${id_juego}`, valoracion);
  }
}
