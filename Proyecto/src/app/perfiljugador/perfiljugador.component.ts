import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfiljugador',
  templateUrl: './perfiljugador.component.html',
  styleUrl: './perfiljugador.component.css'
})

export class PerfiljugadorComponent {

  constructor(private usuarioService: UsuarioService, private router: Router){
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
  id:number = 0;
  BotonDesabilitado: boolean = true;

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
      this.id = this.usuarioRegistrado.idUsuario;
      this.apellido = this.usuarioRegistrado.apellido;     
      this.BotonDesabilitado = false;
    }
  }
  
  BorrarUsuario(idUsuario: number): void {
    console.log(`ID Usuario a eliminar: ${idUsuario}`);
    this.usuarioService.eliminarUsuario(idUsuario).subscribe(
      response => {
        console.log(`Usuario eliminado: ${idUsuario}`);
        this.router.navigate(['/login']);
      },
      error => {
        console.error(`Error al eliminar usuario: ${error}`);
      }
    );
  }

}