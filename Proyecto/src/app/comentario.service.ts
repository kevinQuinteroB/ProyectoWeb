import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:8080/comentario';

  constructor(private http: HttpClient) { }

  getComentariosByJuego(id_juego: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.apiUrl}/juego/${id_juego}`);
  }

  postComentariosByJuego(id_usuario: number, id_juego: number, comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.apiUrl}/crear/${id_usuario}/${id_juego}`, comentario);
  }
}
