import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

document.addEventListener('DOMContentLoaded', function() {
  const barraSticky = document.getElementById('barraSticky');
  const offsetTrigger = 600; // Ajusta este valor según tus necesidades

  window.addEventListener('scroll', function() {
      if (window.scrollY >= offsetTrigger) {
          barraSticky?.classList.add('absolute');
      } else {
          barraSticky?.classList.remove('absolute');
      }
  });
});