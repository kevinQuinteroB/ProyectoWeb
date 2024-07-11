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
  usuarioRegistrado: Usuario | null = null;
  jg: JuegoGenero[];
  compra: Compra;
  currentGame: Juego | null = null;
  idCurrentUser: number;
  total: number = 0;
  totaldesc:number=0;
  fecha:Date = new Date('yyyy-MM-dd');


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

    this.gameService.traerTodo().subscribe(Response => {
      console.log('Juegos Cargados', Response);
      this.juego = Response;
    });

    this.genderService.findAll().subscribe(Response => {
      console.log('Generos Cargados', Response);
      this.gender = Response;
    });

    if (this.usuarioRegistrado) {
      this.idCurrentUser = this.usuarioRegistrado?.idUsuario;
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
    this.actualizarprecio();
  }
  //Fin ng init

  actualizarprecio(): void {
    this.total=0;
    let sum=0;
    let desc=0;
    for (let i = 0; i < this.compras.length; i++) {
       sum=sum+this.compras[i].juego.precio;
       desc=desc+(this.compras[i].juego.precio-(this.compras[i].juego.precio*(this.compras[i].juego.descuento/100)))
    }
    this.total=sum;
    this.totaldesc=desc;
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

  agregarCarrito(juego: number): void {
    
    if (this.usuarioRegistrado != null) {
      if (!this.compras.some(compra => compra.juego.idJuego == juego)) {
        this.compraService.agregarCarrito(this.idCurrentUser, juego, this.compra).subscribe(Response => {
          this.compras.push(Response);
          console.log("Verificando compras list", this.compras)
        });
        this.compraService.findAll(this.usuarioRegistrado.idUsuario).subscribe(Response => {
          this.compras = Response;
        });
      } else {
        console.log("El juego ya esta en el carrito", this.compras);
      }
    } else {
      console.log("Error con usuario", this.usuarioRegistrado);
    }
  }

  delById(id_Compra: number) {
    this.compraService.deletebyId(id_Compra).subscribe(Response => {
      console.log('Juego eliminado del Carrito', Response);
      if (this.usuarioRegistrado != null) {
        this.compraService.findAll(this.usuarioRegistrado.idUsuario).subscribe(Response => {
          this.compras = Response;
        })
      }
    });
  }

  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }
  goPaginaJuego(idJuego: number): void {
    this.gameService.setCurrentGame(idJuego).subscribe(Response => {
      console.log('Juego por Id cargado', Response)
      this.currentGame = Response;
      localStorage.setItem('currentGame', JSON.stringify(Response))
    });
    this.router.navigate(['/juego']);
  }
  actualizarCompra(){
    this.actualizarprecio();

    for (let i = 0; i < this.compras.length; i++) {
      this.compraService.updateCompras(this.fecha,this.totaldesc,this.compras[i].idCompra,this.compras[i]).subscribe(Response=>{
        this.compras[i] = Response;
        console.log('Actualizacion por venta de juego', Response)
      
      })
    }
    this.compras=[];
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
