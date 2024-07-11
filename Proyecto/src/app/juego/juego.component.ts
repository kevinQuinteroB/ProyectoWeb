import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
import { JuegoService } from '../juego.service';
import { Juego } from '../juego';
import { JuegoGeneroService } from '../juego-genero.service';
import { JuegoGenero } from '../juego-genero';
import { ValoracionService } from '../valoracion.service';
import { Valoracion } from '../valoracion';
import { Location } from '@angular/common';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})

export class JuegoComponent implements OnInit {
  valoracion: Valoracion[] = [];
  juegoGeneros: JuegoGenero[] = []; 
  juego: Juego | null = null;
  comentarios: Comentario[] = [];
  nuevoComentario: string = '';
  comentarioEnEdicion: Comentario | null = null;
  comentarioEditado: string = '';
  nuevaValoracion: number = 0;
  valoracionGeneral: number = 0;
  idUsuario: number = -1; // Reemplaza con el ID del usuario actual
  idJuego: number  // Reemplaza con el ID del juego actual
  sesionUsuario: Usuario | null = null
  sesionJuego: Juego | null = null
  prueba: number 

  constructor(
    private valoracionService: ValoracionService,
    private juegoService: JuegoService,
    private comentarioService: ComentarioService,
    private juegoGeneroService: JuegoGeneroService,
    private location: Location,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.sesionUsuario = this.usuarioService.getUsuarioRegistrado();
    if (this.sesionUsuario) {
      this.idUsuario = this.sesionUsuario.idUsuario;
    }
    this.sesionJuego = this.juegoService.getJuegoRegistrado();
    if (this.sesionJuego) {
      this.idJuego = this.sesionJuego.idJuego;

      this.getJuegoById(this.idJuego);
      this.getjuegoGenerosByJuego(this.idJuego); 
      this.getComentarios(this.idJuego);
      this.getValoracion(this.idJuego);
    }
   }

  ngOnInit(): void {    
    
  }

  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }

  getValoracion(idJuego: number): void {
    this.valoracionService.findAll(idJuego).subscribe(
      (data: Valoracion[]) => {
        this.valoracion = data;
        this.calcularValoracionGeneral();
      },
      error => {
        console.error('Error al obtener las valoraciones', error);
      }
    );
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
      },
      error => {
        console.error('Error al obtener los comentarios', error);
      }
    );
  }

  enviarValoracion(): void {
    if (this.nuevaValoracion >= 1 && this.nuevaValoracion <= 5) {
      const valoracion: Valoracion = {
        idValoracion: 0,
        content: this.nuevaValoracion,
        juego: { idJuego: this.idJuego } as any
      };

      this.valoracionService.postValoracion(this.idJuego, valoracion).subscribe(
        (data: Valoracion) => {
          this.valoracion.push(data);
        },
        error => {
          console.error('Error al enviar la valoración', error);
        }
      );
    }
  }

  enviarComentario(): void {
    const comentario: Comentario = {
      idComentario: 0, 
      contenido: this.nuevoComentario,
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

  calcularValoracionGeneral(): void {
    let totalValoraciones = 0;
    if (this.valoracion.length > 0) {
      totalValoraciones = this.valoracion.reduce((total, valoracion) => total + valoracion.content, 0);
      this.valoracionGeneral = totalValoraciones / this.valoracion.length;
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
  goPerfil() {
    this.router.navigate(['/perfil'])
  }
  goHome() {
    this.router.navigate(['/home'])
  }

  ejecutarRetraso() :void {
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


