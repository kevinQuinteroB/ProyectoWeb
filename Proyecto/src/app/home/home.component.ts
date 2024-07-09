import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from '../juego.service';
import { GeneroService } from '../genero.service';
import { Juego } from '../juego';
import { Genero } from '../genero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})

export class HomeComponent {
  change: Boolean = true;
  juego:Juego[];
  gender:Genero[];
  constructor(
    private renderer: Renderer2,
    private gameService: JuegoService,
    private genderService: GeneroService,
    private router:Router
  ) {

    document.addEventListener('DOMContentLoaded', () => {
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

    })
  }
  ngOnInit(){
    this.gameService.traerTodo().subscribe(Response => {
      console.log('Juegos Cargados', Response);
      this.juego=Response;
    });
    this.genderService.findAll().subscribe(Response => {
      console.log('Generos Cargados', Response);
      this.gender=Response;
    });
  }
  cerrarSesion(){
    this.router.navigate(['/login']);
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

