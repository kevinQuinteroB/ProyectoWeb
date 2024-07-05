import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  constructor(private router:Router, private usuarioService:UsuarioService,){

  }
  email: string;
  contrasena: string;
  consulta(): void {
    
    this.usuarioService.consultarUsuario(this.email, this.contrasena).subscribe(response => {
      console.log('Usuario registrado:', response);
      if (response != null) {
        this.router.navigate(['/juego']);
      } else {
        console.error('Error al autenticar usuario:');
        this.mostrarModalError();
      }
    });
  }
  mostrarModalError(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement);
      myModal.show();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const maleRadioButton = document.getElementById('gender-male');
  const femaleRadioButton = document.getElementById('gender-female');
  const telefonoInput = document.getElementById('telefono') as HTMLInputElement;


  if (maleRadioButton && femaleRadioButton) {
      maleRadioButton.addEventListener('click', () => {
          if ((maleRadioButton as HTMLInputElement).checked) {
              (femaleRadioButton as HTMLInputElement).checked = false;
          }
      });

      femaleRadioButton.addEventListener('click', () => {
          if ((femaleRadioButton as HTMLInputElement).checked) {
              (maleRadioButton as HTMLInputElement).checked = false;
          }
      });
  }
  if (telefonoInput){
    telefonoInput.addEventListener('keydown', (event) => {
      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];

      if (!allowedKeys.includes(event.key) && !/^[0-9]$/.test(event.key)) {
          event.preventDefault();
      }
  });
  telefonoInput.addEventListener('input', () => {
    telefonoInput.value = telefonoInput.value.replace(/\D/g, '').slice(0, 10);
});
  }
});

