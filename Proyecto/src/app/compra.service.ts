import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private url = "http://localhost:8080"
  constructor(private httpClient: HttpClient) { }
  findAll(id_User:number): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${this.url}/buy/${id_User}`).pipe(
      tap(compras => {
        console.log('Carrito Cargado', compras);
      })
    );

  }

  carrito(id_User:number): Observable<Compra[]>{
    return this.httpClient.get<Compra[]>(`${this.url}/buy/inventario/${id_User}`).pipe(
      tap( inventario => {
        console.log("Inventario Cargado", inventario);
      })
    );
  }
}
