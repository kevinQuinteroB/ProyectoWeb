import { Comentario } from './comentario';

describe('Comentario', () => {
  it('should create an instance', () => {
    const usuario = {
      idUsuario: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      username: 'jperez',
      edad: 30,
      email: 'jperez@example.com',
      contrasena: '123456',
      saldo: 1000,
      sexo: 'M',
      telefono: 1234567890
    };

    const juego = {
      idJuego: 1,
      nombre: 'Call of Duty',
      descripcion: 'Un juego de disparos emocionante.',
      valoracion: 4.5,
      precio: 59.99,
      imagen: 'https://example.com/callofduty.jpg',
      descuento: 0
    };

    const comentario = new Comentario(
      1,
      'Este juego es increíble!',
      5.0,
      usuario,
      juego
    );

    expect(comentario).toBeTruthy();
  });
});
