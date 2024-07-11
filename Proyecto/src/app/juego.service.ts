import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private base_url = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {

  }
  traerTodo(): Observable<Juego[]> {
    return this.httpClient.get<Juego[]>(`${this.base_url}/game/all`).pipe(
      tap(imgGame => {
        console.log('Juego Cargado', imgGame);
      })
    );
  }
  getJuegoRegistrado(): Juego {
    return JSON.parse(localStorage.getItem('juegoRegistrado') || '{}');
  }
  setCurrentGame(idJuego:number): Observable<Juego> {
    
      return this.httpClient.get<Juego>(`${this.base_url}/game/${idJuego}`).pipe(
        tap(game => {
          localStorage.setItem('usuarioRegistrado', JSON.stringify(game));
        })
      );
    
  }
}
