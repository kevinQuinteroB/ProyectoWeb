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
    return JSON.parse(localStorage.getItem('gameRegistrado') || '{}');
  }
  setCurrentGame(idJuego:number): Observable<Juego> {
    
      return this.httpClient.get<Juego>(`${this.base_url}/game/${idJuego}`).pipe(
        tap(game => {
          console.log("Juego Cargado Por ID ", game)
          localStorage.setItem('gameRegistrado', JSON.stringify(game));
        })
      );
    
  }
}
