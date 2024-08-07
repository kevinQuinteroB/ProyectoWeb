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
  findAll(id_User: number): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${this.url}/buy/${id_User}`).pipe(
      tap(compras => {
        console.log('Carrito Cargado', compras);
      })
    );

  }

  carrito(id_User: number): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${this.url}/buy/inventario/${id_User}`).pipe(
      tap(inventario => {
        console.log("Inventario Cargado", inventario);
      })
    );
  }

  agregarCarrito(idUser: number, idJuego: number, compra: Compra): Observable<Compra> {
    return this.httpClient.post<Compra>(`${this.url}/buy/add/${idUser}/${idJuego}`, compra).pipe(
      tap(compra => {
        console.log("Item añadido al carrito", compra);
      })
    );
  }
  deletebyId(id_Compra:number):Observable<Compra>{
    return this.httpClient.delete<Compra>(`${this.url}/buy/del/${id_Compra}`).pipe(
      tap(compra => {
        console.log("Item eliminado del carrito", compra);
      })
    );
  }
  updateCompras(fecha:Date,monto:number, compra:Compra):Observable<Compra>{
    return this.httpClient.put<Compra>(`${this.url}/buy/update/${fecha}/${monto}`,compra).pipe(
      tap(compra => {
        console.log("Item actualizado en el carrito", compra);
      })
    );
  }
}
