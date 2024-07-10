import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { Location } from '@angular/common';
import { CompraService } from '../compra.service';
import { Compra } from '../compra';

@Component({
  selector: 'app-perfiljugador',
  templateUrl: './perfiljugador.component.html',
  styleUrl: './perfiljugador.component.css'
})

export class PerfiljugadorComponent {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router, 
    private location:Location,
    private compraService: CompraService
  ){}
  
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
  compra: Compra[];

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
      this.compraService.carrito(this.id).subscribe(
        compra => {
          this.compra = compra;
          console.log("El inventario del usuario es:", compra)
        },
        error => {
          console.error('Error al obtener los datos del carrito', error);
        }
      );
    }
  }


  RecargarSaldoMenu(){
    const modalElement = document.getElementById('RecargarSaldo');
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement);
      myModal.show();
    }
  }


  RecargarSaldo(saldoRecarga: number, idUsuario: number):void{
    const usuario:Usuario = {
      contrasena: this.contrasena,
      edad: Number(this.edad),
      email: this.email,
      nombre: this.nombre,
      saldo: Number(this.saldo) + saldoRecarga,
      sexo: this.sexo,
      telefono: Number(this.telefono),
      username: this.username,
      apellido: this.apellido,
      idUsuario: this.id
    }
    this.usuarioService.actualizarSaldo(usuario, idUsuario).subscribe(
      Response =>{
        console.log(`Usuario Actualizado: ${usuario}`)
      },
      error => {
        console.error(`Error al actualizar usuario: ${error}`);
      }
    )
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
    this.location.go(this.location.path());
    window.location.reload();
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