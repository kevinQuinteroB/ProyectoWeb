// comentario.ts
export class Comentario {
    constructor(
      public idComentario: number,
      public contenido: string,
      public usuario: {
        idUsuario: number,
        nombre: string,
        apellido: string,
        username: string,
        edad: number,
        email: string,
        contrasena: string,
        saldo: number,
        sexo: string,
        telefono: number
      },
      public juego: {
        idJuego: number,
        nombre: string,
        descripcion: string,
        valoracion: number,
        precio: number,
        imagen: string,
        descuento: number
      }
    ) {}
  }
  