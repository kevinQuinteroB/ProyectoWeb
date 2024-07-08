import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-perfiljugador',
  templateUrl: './perfiljugador.component.html',
  styleUrl: './perfiljugador.component.css'
})

export class PerfiljugadorComponent {

  constructor(private usuarioService: UsuarioService){
  }
  
  apellido:string = "No Registrado";
  contrasena:string = "No Registrado";
  edad:string = "No Registrado";
  email:string = "No Registrado";
  nombre:string = "No Registrado";
  saldo:string = "No Registrado";
  sexo:string = "No Registrado";
  telefono:string = "No Registrado";
  username:string = "No Registrado";

  usuarioRegistrado: Usuario | null = null;

  ngOnInit():void{

    this.usuarioRegistrado = this.usuarioService.getUsuarioRegistrado();
    console.log(this.apellido)
    if(this.usuarioRegistrado){
      this.contrasena = this.usuarioRegistrado.contrasena;
      this.edad = this.usuarioRegistrado.edad.toString();
      this.email = this.usuarioRegistrado.email;
      this.nombre = this.usuarioRegistrado.nombre;
      this.saldo = this.usuarioRegistrado.saldo.toString();
      this.sexo = this.usuarioRegistrado.sexo;
      this.telefono = this.usuarioRegistrado.telefono.toString();
      this.username = this.usuarioRegistrado.username;
      this.apellido = this.usuarioRegistrado.apellido;
    }
  }
  
}