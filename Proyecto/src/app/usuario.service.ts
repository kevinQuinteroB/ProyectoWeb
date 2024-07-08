import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  consultarUsuario(email: string, contrasena: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseURL}/login/${email}/${contrasena}`).pipe(
      tap(usuario => {
        localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
      })
    );
  }

  eliminarUsuario(idUsuario: number){
    this.httpClient.delete<number>(`${this.baseURL}/login/${idUsuario}`);
  }

  registrarUsuario(usuario:any): Observable<any>{
    return this.httpClient.post(`${this.baseURL}/login`, usuario);
  }

  getUsuarioRegistrado(): Usuario {
    return JSON.parse(localStorage.getItem('usuarioRegistrado') || '{}');
  }

  borrarCache():void{
    localStorage.clear();
  }
}
