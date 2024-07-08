import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})

export class HomeComponent {
  change: Boolean =true;
  constructor(
    private renderer: Renderer2

  ) {

    document.addEventListener('DOMContentLoaded', () => {
      const options = document.getElementById('options');
      var button = document.getElementById('boton_orden');
      button?.addEventListener('click', () => {
        this.change=!this.change
        if (!this.change) {
          this?.renderer.setStyle(options, 'display', 'block');
        }
        else {
          this?.renderer.setStyle(options, 'display', 'none');
        }
      })

    })
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

