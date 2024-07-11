import { Juego } from "./juego"
import { Usuario } from "./usuario"
export class Compra {
    idCompra: number
    totalCompra: number
    fecha: Date
    juego: Juego 
    user: Usuario 
}
