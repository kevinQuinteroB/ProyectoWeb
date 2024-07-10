import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
import { JuegoService } from '../juego.service';
import { Juego } from '../juego';
import { GeneroService } from '../genero.service';
import { Genero } from '../genero';
import { JuegoGeneroService } from '../juego-genero.service';
import { JuegoGenero } from '../juego-genero';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})

export class JuegoComponent implements OnInit {
  valoracionGeneral: number = 0;
  juegoGeneros: JuegoGenero[] = []; 
  juego: Juego | null = null;
  comentarios: Comentario[] = [];
  nuevoComentario: string = '';
  comentarioEnEdicion: Comentario | null = null;
  comentarioEditado: string = '';
  idUsuario: number = 0; // Reemplaza con el ID del usuario actual
  idJuego: number = 0; // Reemplaza con el ID del juego actual

  constructor(
    private genderService: GeneroService,
    private juegoService: JuegoService,
    private comentarioService: ComentarioService,
    private juegoGeneroService: JuegoGeneroService
  ) { }

  ngOnInit(): void {
    this.getjuegoGenerosByJuego(this.idJuego); 
    this.getComentarios(this.idJuego);
    this.getJuegoById(this.idJuego);
  }

  getjuegoGenerosByJuego(idJuego: number): void {
    this.juegoGeneroService.findAll(idJuego).subscribe(
      (data: JuegoGenero[]) => {
        this.juegoGeneros = data;
      },
      error => {
        console.error('Error al obtener los géneros del juego', error);
      }
    );
  }


  getJuegoById(idJuego: number): void {
    this.juegoService.traerTodo().subscribe(
      (juegos: Juego[]) => {
        this.juego = juegos.find(juego => juego.idJuego === idJuego) || null;
      },
      error => {
        console.error('Error al obtener los juegos', error);
      }
    );
  }


  getComentarios(idJuego: number): void {
    this.comentarioService.getComentariosByJuego(idJuego).subscribe(
      (data: Comentario[]) => {
        this.comentarios = data;
        this.calcularValoracionGeneral();
      },
      error => {
        console.error('Error al obtener los comentarios', error);
      }
    );
  }

  calcularValoracionGeneral(): void {
    if (this.comentarios.length > 0) {
      const totalValoraciones = this.comentarios.reduce((acc, comentario) => acc + comentario.valoracionJuego, 0);
      this.valoracionGeneral = totalValoraciones / this.comentarios.length;
    } else {
      this.valoracionGeneral = 0;
    }
  }

  enviarComentario(): void {
    const comentario: Comentario = {
      idComentario: 0,
      contenido: this.nuevoComentario,
      valoracionJuego: 0,
      usuario: { idUsuario: this.idUsuario } as any,
      juego: { idJuego: this.idJuego } as any
    };

    this.comentarioService.postComentariosByJuego(this.idUsuario, this.idJuego, comentario).subscribe(
      (data: Comentario) => {
        this.comentarios.push(data);
        this.nuevoComentario = '';
      },
      error => {
        console.error('Error al enviar el comentario', error);
      }
    );
  }

  eliminarComentario(idComentario: number): void {
    this.comentarioService.deleteComentarioByJuego(idComentario).subscribe(
      () => {
        this.comentarios = this.comentarios.filter(comentario => comentario.idComentario !== idComentario);
      },
      error => {
        console.error('Error al eliminar el comentario', error);
      }
    );
  }

  iniciarEdicion(comentario: Comentario): void {
    this.comentarioEnEdicion = comentario;
    this.comentarioEditado = comentario.contenido;
  }

  actualizarComentario(idComentario: number): void {
    if (this.comentarioEnEdicion) {
      const comentarioActualizado: Comentario = {
        ...this.comentarioEnEdicion,
        contenido: this.comentarioEditado
      };

      this.comentarioService.updateComentario(idComentario, comentarioActualizado).subscribe(
        (data: Comentario) => {
          const index = this.comentarios.findIndex(comentario => comentario.idComentario === idComentario);
          this.comentarios[index] = data;
          this.comentarioEnEdicion = null;
          this.comentarioEditado = '';
        },
        error => {
          console.error('Error al actualizar el comentario', error);
        }
      );
    }
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


