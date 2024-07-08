import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Location } from '@angular/common';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  constructor(private router:Router, private usuarioService:UsuarioService,  private location: Location){
    this.apellido = "";
    this.contrasena = "";
    this.edad = 18;
    this.email = "";
    this.nombre = "";
    this.saldo = 0;
    this.sexo = "";
    this.username = "";
    
  }

  ngOnInit(){
    this.usuarioService.borrarCache();
  }

  titulo: String;
  mensaje: String;

  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }

  registrar():void{
    const usuario = {
      apellido: this.apellido,
      contrasena:this.contrasena,
      edad: this.edad,
      email: this.email,
      nombre: this.nombre,
      saldo: this.saldo,
      sexo: this.sexo,
      username: this.username,
      telefono: this.telefono
    }

    this.usuarioService.registrarUsuario(usuario).subscribe(Response =>{
      console.log('Usuario registrado:', Response);
      this.mostrarRegistro();
      this.titulo = "Registro exitoso"
      this.mensaje = "¡Gracias por registrarte en nuestra página web! Nos alegra que te unas a nuestra comunidad. Estamos aquí para ofrecerte la mejor experiencia y cualquier ayuda que necesites. ¡Bienvenido/a!"
    }, error => {
      console.error('Error al registrar usuario:', error);
      this.mostrarRegistro();
      this.titulo = "Registro denegado"
      this.mensaje = "Parece que ingresaste un usuario o un email ya existente"
    })
  }

  

  borrarFormulario(): void {
    this.apellido = "";
    this.contrasena = "";
    this.edad = 18;
    this.email = "";
    this.nombre = "";
    this.saldo = 0;
    this.sexo = "";
    this.username = "";
    this.telefono = 0;
  }

  formularioCompleto(): boolean {
    const camposLlenos = this.camposLlenos();
    return camposLlenos;
  } 

  camposLlenos(): boolean {
    return (
      this.apellido !== '' &&
      this.contrasena !== '' &&
      this.edad !== null && 
      this.email !== '' &&
      this.nombre !== '' &&
      this.saldo !== null && 
      this.sexo !== '' &&
      this.telefono !== 0 && 
      this.username !== ''
    );
  }



  apellido:string;
  contrasena:string;
  edad:number;
  email:string;
  nombre:string;
  saldo:number;
  sexo:string;
  telefono:number;
  username:string;
  
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
  mostrarRegistro(): void {
    const modalElement = document.getElementById('loginExitoso');
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement);
      myModal.show();
    }
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

