import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from '../juego.service';
import { GeneroService } from '../genero.service';
import { CompraService } from '../compra.service';
import { UsuarioService } from '../usuario.service';
import { JuegoGeneroService } from '../juego-genero.service';
import { Juego } from '../juego';
import { Genero } from '../genero';
import { Compra } from '../compra';
import { Usuario } from '../usuario';
import { JuegoGenero } from '../juego-genero';
import { formatDate, Location } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})

export class HomeComponent {
  change: Boolean = true;
  juego: Juego[];
  gender: Genero[];
  compras: Compra[];
  public usuarioRegistrado: Usuario | null = null;
  jg: JuegoGenero[];
  compra: Compra;
  currentGame: Juego | null = null;
  constructor(
    private renderer: Renderer2,
    private gameService: JuegoService,
    private genderService: GeneroService,
    private router: Router,
    private compraService: CompraService,
    private usuarioService: UsuarioService,
    private jgService: JuegoGeneroService,
    private location: Location
  ) {
    this.compra = { idCompra: 0, user: {} as Usuario, juego: {} as Juego, totalCompra: 0, fecha: new Date("31-1-2001") };
  }


  ngOnInit() {
    this.usuarioRegistrado = this.usuarioService.getUsuarioRegistrado();
    const options = document.getElementById('options');
    var button = document.getElementById('boton_orden');
    button?.addEventListener('click', () => {
      this.change = !this.change
      if (!this.change) {
        this?.renderer.setStyle(options, 'display', 'block');
      }
      else {
        this?.renderer.setStyle(options, 'display', 'none');
      }
    })
    this.usuarioRegistrado = this.usuarioService.getUsuarioRegistrado();
    this.gameService.traerTodo().subscribe(Response => {
      console.log('Juegos Cargados', Response);
      this.juego = Response;
    });
    this.genderService.findAll().subscribe(Response => {
      console.log('Generos Cargados', Response);
      this.gender = Response;
    });

    if (this.usuarioRegistrado) {
      this.compraService.findAll(this.usuarioRegistrado.idUsuario).subscribe(Response => {
        console.log('Compras Cargadas', Response);
        this.compras = Response;
      });
    } else {
      this.compraService.findAll(-1).subscribe(Response => {
        console.log('Compras Cargadas', Response);
        this.compras = Response;
      });
    }


  }
  searchForGender(idGender: number) {
    this.jgService.findByGender(idGender).subscribe(Response => {
      console.log('Compras Cargadas', Response);
      this.jg = Response;
      this.juego = []
      for (let i = 0; i < this.jg.length; i++) {
        this.juego[i] = this.jg[i].juego
      }
    });
  }
  cerrarSesion() {
    this.router.navigate(['/login']);
  }
  goPerfil() {
    this.router.navigate(['/perfil'])
  }

  setJuegoRegistrado(juego: Juego): void {
    localStorage.setItem('juegoRegistrado', JSON.stringify(juego));
  }

  agregarAlCarrito(juego: number, idUser: number = 0) {
    console.log('Verificando el contenido de la cache: ', this.usuarioRegistrado?.idUsuario)
    this.compraService.agregarCarrito(idUser, juego, this.compra);
    this.refreshPage();
  }
  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }
  goPaginaJuego(idJuego: number): void {
    this.gameService.setCurrentGame(idJuego);
    this.currentGame = this.gameService.getJuegoRegistrado();
    this.router.navigate(['/juego']);

  }
}

document.addEventListener('DOMContentLoaded', function () {
  const barraSticky = document.getElementById('barraSticky');
  const offsetTrigger = 600; // Ajusta este valor según tus necesidades

  window.addEventListener('scroll', function () {
    if (window.scrollY >= offsetTrigger) {
      barraSticky?.classList.add('absolute');
    } else {
      barraSticky?.classList.remove('absolute');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const row_portada = document.getElementById('row_portada');
  const offsetTrigger = 60; // Ajusta este valor según tus necesidades

  window.addEventListener('scroll', function () {
    if (window.scrollY >= offsetTrigger) {
      row_portada?.classList.add('fixed');
    } else {
      row_portada?.classList.remove('fixed');
    }
  });
});

/*document.addEventListener('DOMContentLoaded', () => {
  const juego = document.getElementById('image_game');
  const buttons = document.querySelectorAll<HTMLButtonElement>('.image_game_button');

  if (juego) {
    juego.addEventListener('click', () => {
      buttons.forEach(button => button.style.zIndex = '3000');
    });
  }
});*/
