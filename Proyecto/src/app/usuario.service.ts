import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient) {}
  consultarUsuario(email: string, contrasena: string): Observable<Usuario> {

    return this.httpClient.get<Usuario>(`${this.baseURL}/${email}/${contrasena}`);
  }

  mostrarModalError(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement);
      myModal.show();
    }
  }
}
