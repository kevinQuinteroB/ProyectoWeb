import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';

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

  eliminarUsuario(idUsuario: number): Observable<any> {
    const url = `${this.baseURL}/login/delete/${idUsuario}`;
    console.log(`Sending DELETE request to: ${url}`); // Agrega esta línea para depurar
    return this.httpClient.delete(url).pipe(
      tap(() => {
        console.log(`Usuario Eliminado: ${idUsuario}`);
      })
    );
  }

  actualizarSaldo(usuario:Usuario, idUsuario: number): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/actualizar/${idUsuario}`, usuario).pipe(
      tap(()=>{
        console.log(`Usuario Actualizado: ${usuario}`)
      })
    )
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
