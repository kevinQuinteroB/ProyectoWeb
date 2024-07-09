import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  comentarios: Comentario[] = [];
  nuevoComentario: string = '';
  idUsuario: number = 0; // Reemplaza con el ID del usuario actual
  idJuego: number = 0; // Reemplaza con el ID del juego actual

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios(this.idJuego);
  }

  getComentarios(idJuego: number): void {
    this.comentarioService.getComentariosByJuego(idJuego).subscribe(
      (data: Comentario[]) => {
        this.comentarios = data;
      },
      error => {
        console.error('Error al obtener los comentarios', error);
      }
    );
  }

  enviarComentario(): void {
    const comentario: Comentario = {
      idComentario: 0, // Este valor será ignorado por el backend al crear un nuevo comentario
      contenido: this.nuevoComentario,
      valoracionJuego: 0, // Puedes agregar lógica para la valoración si es necesario
      usuario: { idUsuario: 0 } as any, // Solo necesitamos el ID del usuario
      juego: { idJuego: 0 } as any // Solo necesitamos el ID del juego
    };

    this.comentarioService.postComentariosByJuego(this.idUsuario, this.idJuego, comentario).subscribe(
      (data: Comentario) => {
        this.comentarios.push(data); // Agrega el nuevo comentario a la lista de comentarios
        this.nuevoComentario = ''; // Limpia el textarea
      },
      error => {
        console.error('Error al enviar el comentario', error);
      }
    );
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn') as HTMLButtonElement;
  const header = document.querySelector('.header') as HTMLElement;

  if (menuBtn && header) {
    menuBtn.addEventListener('click', () => {
      header.classList.toggle('dropdown-active');
    });
  }
});


  
document.addEventListener('DOMContentLoaded', function () {
  const generoButton = document.querySelector('.generoBtn') as HTMLButtonElement;
  const tableContainer = document.querySelector('.table-container') as HTMLElement;

  generoButton.addEventListener('click', () => {
    tableContainer.classList.toggle('visible');
  });
});



