import { Component } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

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

